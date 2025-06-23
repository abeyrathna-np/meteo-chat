import React from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";

const ScrollingBanner = () => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          width: "100%",
          maxWidth: "1000px",
          margin: "auto",
          p: 4,
          backgroundColor: "#f0f4f8",
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          fontWeight={700}
        >
          🌦️ Weather Bot – Intelligent Weather Assistant
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Weather Bot</strong> is an AI-powered assistant that provides
          real-time, natural language–based weather insights for any given date
          and location. Built using <strong>FastAPI</strong>,{" "}
          <strong>Groq LLM</strong>, and a custom
          <strong> MCP (Model Context Protocol)</strong> weather server, it
          intelligently interprets user queries and invokes external tools when
          needed to provide precise, contextual responses.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom fontWeight={600}>
          🔧 Key Features:
        </Typography>
        <ul>
          <li>
            <strong>🌤️ Real-Time Weather Insights</strong>: Answers questions
            like “What was the weather in Colombo on Jan 15, 2024?”
          </li>
          <li>
            <strong>🧠 LLM + Tool Integration</strong>: Uses Groq’s LLM to
            decide whether to answer directly or call a tool (e.g.,{" "}
            <code>get_weather(date)</code>).
          </li>
          <li>
            <strong>🔗 MCP Integration</strong>: Connects to your weather API
            through MCP to fetch structured responses for LLM use.
          </li>
          <li>
            <strong>💬 Natural Language Understanding</strong>: Converts
            structured MCP outputs into human-readable weather summaries.
          </li>
          <li>
            <strong>⚡ Fast & Lightweight</strong>: Powered by FastAPI and Groq
            SDK for low-latency responses.
          </li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom fontWeight={600}>
          🔍 Example Interaction:
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
          <Typography variant="subtitle1">
            <strong>User:</strong> “What was the temperature in Colombo on March
            3, 2023?”
          </Typography>
          <Typography variant="subtitle1">
            <strong>Bot:</strong> “On March 3, 2023, Colombo recorded a high of
            32°C and scattered showers.”
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default ScrollingBanner;
