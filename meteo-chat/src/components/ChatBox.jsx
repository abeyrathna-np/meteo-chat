import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import ReactMarkdown from "react-markdown";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = "https://meteo-production-6a38.up.railway.app";

  const sendMessage = async () => {
    if (!message.trim()) {
      setError("Please enter a message");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.detail || "Failed to get response");
      }
      debugger;
      const data = await response.json();
      setResponse(data.response);
    } catch (err) {
      console.error("Error calling chat API:", err);
      setError(err.message || "Failed to connect to the weather service");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessage("");
    setResponse("");
    setError("");
  };

  return (
    <>
      <Box
        id="chatbot-section"
        component="section"
        sx={{
          py: 8,
          px: 4,
          backgroundColor: "#f9f9f9",
          backgroundImage: "url(https://source.unsplash.com/random)",
        }}
      >
        <Card>
          <CardContent>
            <img
              src="/logos/chatbot.jpg"
              alt="Image Icon"
              width={100}
              style={{ marginRight: 8 }}
            />

            <TextField
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about weather data... (Press Enter to send)"
              disabled={loading}
            />

            <box>
              {loading && (
                <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                    <span className="text-blue-600">
                      Getting weather information...
                    </span>
                  </div>
                </div>
              )}
              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">❌</span>
                    <span className="text-red-700 font-medium">Error:</span>
                    <span className="text-red-600">{error}</span>
                  </div>
                </div>
              )}
              {response && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <h4 className="font-medium text-green-800 mb-2">
                        Weather Bot:
                      </h4>
                      <div className="text-gray-700 whitespace-pre-wrap">
                        <ReactMarkdown>{response}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </box>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={sendMessage}
                disabled={loading || !message.trim()}
              >
                {loading ? "..." : "Send"}
              </Button>
              <Button variant="contained" color="primary" onClick={clearChat}>
                Clear
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default ChatBox;
