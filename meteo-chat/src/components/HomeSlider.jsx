import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlayArrow,
  Pause,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Fade,
  MobileStepper,
} from "@mui/material";

const slides = [
  {
    id: 1,
    title: "Welcome to Weather Bot",
    subtitle: "Discover amazing features and possibilities",
    description: [
      "Our Weather Chatbot is an intelligent conversational assistant that provides real-time and historical weather insights through natural language queries. It is built using a modern AI integration architecture, combining fast, scalable technologies.",
    ],
    image: "/background/1.jpg",
    cta: "Get Started",
  },
  {
    id: 2,
    title: "Tech Stack & Architecture",
    subtitle: "Leading the future of technology",
    description: [
      "FastMCP (Model Control Protocol): Enables seamless orchestration between the chatbot interface and backend APIs. It wraps our weather service in a structured, context-aware protocol that feeds domain-specific data to the LLM.",
      "Groq LLM: Powers the chatbot with ultra-low-latency natural language understanding and response generation. Groq's inference performance ensures fast, human-like interactions.",
      "FastAPI: A high-performance Python API framework used to expose weather data endpoints and integrate them into the MCP context server. It also serves the chatbot interface and provides REST access.",
      "PostgreSQL: Stores historical weather data (e.g., temperature, rainfall, humidity) efficiently, allowing the chatbot to respond with accurate information for any given location and date.",
    ],
    image: "/background/2.png",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Key Features",
    subtitle: "Connect with thousands of creators",
    description: [
      "Natural language queries like: “What was the rainfall in Colombo last June?” or “Will it rain tomorrow?”",
      "Contextual awareness using MCP for grounding answers in real data",
      "Real-time and historical weather data from PostgreSQL via FastAPI",
      "Lightning-fast inference and responses powered by Groq",
    ],
    image: "/background/3.png",
    cta: "Join Now",
  },
];

const HomeSliderMUI = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "75vh",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <Fade
          key={slide.id}
          in={index === currentSlide}
          timeout={600}
          unmountOnExit
        >
          <Box
            sx={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <Box
              sx={{
                color: "white",
                textAlign: "center",
                p: 4,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: 2,
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                {slide.title}
              </Typography>
              <Box component="ul" sx={{ textAlign: "left", mb: 4, pl: 3 }}>
                {slide.description.map((point, idx) => (
                  <Typography
                    component="li"
                    variant="h6"
                    key={idx}
                    sx={{ mb: 1 }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
              {/* <Button variant="contained" color="primary" size="large">
                {slide.cta}
              </Button> */}
            </Box>
          </Box>
        </Fade>
      ))}

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 10,
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 10,
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      <IconButton
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "white",
          zIndex: 10,
        }}
      >
        {isAutoPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <MobileStepper
        variant="dots"
        steps={slides.length}
        position="static"
        activeStep={currentSlide}
        sx={{
          position: "absolute",
          bottom: 0,
          background: "transparent",
          justifyContent: "center",
          width: "100%",
          zIndex: 10,
        }}
        backButton={<Box />}
        nextButton={<Box />}
      />
    </Box>
  );
};

export default HomeSliderMUI;
