// ==========================================
// DATA: THE MASTER DIRECTORY (100+ Tools)
// ==========================================
const toolsDatabase = [
    // --- Local / Self-Hosted Models ---
    { name: "Ollama", category: "Local / Self-Hosted Models", desc: "Run massive language models locally with a single command.", strengths: "Incredibly easy installation, API compatibility, vast model registry.", freeType: "Open-source / Local", url: "https://ollama.com/" },
    { name: "LM Studio", category: "Local / Self-Hosted Models", desc: "Discover, download, and run local LLMs through a beautiful desktop GUI.", strengths: "Cross-platform, uses GGUF models, built-in chat UI and local server.", freeType: "Free Desktop App / Local", url: "https://lmstudio.ai/" },
    { name: "GPT4All", category: "Local / Self-Hosted Models", desc: "Privacy-first local LLM runner and ecosystem.", strengths: "Runs on consumer CPUs, no internet required, integrates local documents (RAG).", freeType: "Open-source / Local", url: "https://gpt4all.io/" },
    { name: "Jan", category: "Local / Self-Hosted Models", desc: "Open-source alternative to ChatGPT that runs 100% offline.", strengths: "Beautiful UI, local API server, deeply customizable.", freeType: "Open-source / Local", url: "https://jan.ai/" },
    { name: "Open WebUI", category: "Local / Self-Hosted Models", desc: "Extensible, feature-rich, and user-friendly WebUI for local LLMs (formerly Ollama WebUI).", strengths: "Docker deployment, feels exactly like ChatGPT, multi-user support.", freeType: "Open-source / Self-hosted", url: "https://docs.openwebui.com/" },
    { name: "KoboldCPP", category: "Local / Self-Hosted Models", desc: "A simple, single-file executable for running local LLMs.", strengths: "Excellent for roleplay, supports older hardware, very lightweight.", freeType: "Open-source / Local", url: "https://github.com/LostRuins/koboldcpp" },
    { name: "Oobabooga Text Generation WebUI", category: "Local / Self-Hosted Models", desc: "The 'Automatic1111' for text models.", strengths: "Supports almost every model architecture and loader (ExLlama, llama.cpp).", freeType: "Open-source / Local", url: "https://github.com/oobabooga/text-generation-webui" },
    { name: "AnythingLLM", category: "Local / Self-Hosted Models", desc: "All-in-one desktop app for local LLMs with built-in RAG.", strengths: "Excellent document chatting, simple install, agnostic model support.", freeType: "Open-source / Local", url: "https://anythingllm.com/" },
    { name: "Msty", category: "Local / Self-Hosted Models", desc: "Elegant local and API-based AI chat application.", strengths: "Visually stunning, seamless model management, fast.", freeType: "Free App / Local", url: "https://msty.app/" },
    { name: "LocalAI", category: "Local / Self-Hosted Models", desc: "Drop-in replacement REST API for OpenAI running locally.", strengths: "Self-hosted alternative to OpenAI APIs, supports text, image, and audio.", freeType: "Open-source / Self-hosted", url: "https://localai.io/" },
    { name: "Llama.cpp", category: "Local / Self-Hosted Models", desc: "Port of Facebook's LLaMA model in C/C++.", strengths: "The foundational engine behind most local AI, insanely optimized for Mac and PC.", freeType: "Open-source / CLI", url: "https://github.com/ggerganov/llama.cpp" },
    { name: "Chatbox", category: "Local / Self-Hosted Models", desc: "Desktop client for multiple AI APIs and local models.", strengths: "Clean interface, cross-platform, stores data locally.", freeType: "Open-source / App", url: "https://chatboxai.app/" },
    { name: "LibreChat", category: "Local / Self-Hosted Models", desc: "Free, open-source AI chat platform supporting multiple providers.", strengths: "Looks like ChatGPT, supports Anthropic, OpenAI, and local endpoints.", freeType: "Open-source / Self-hosted", url: "https://librechat.ai/" },
    { name: "Llama-GPT", category: "Local / Self-Hosted Models", desc: "Self-hosted, offline, ChatGPT-like clone powered by Llama 2/3.", strengths: "Dockerized, completely private, secure.", freeType: "Open-source / Self-hosted", url: "https://github.com/getumbrel/llama-gpt" },
    { name: "ExLlamaV2", category: "Local / Self-Hosted Models", desc: "Extremely fast inference library for local LLMs.", strengths: "Incredible speeds on modern consumer GPUs.", freeType: "Open-source / Engine", url: "https://github.com/turboderp/exllamav2" },
    { name: "MLC LLM", category: "Local / Self-Hosted Models", desc: "Universal deployment solution for LLMs across devices.", strengths: "Runs models natively on iOS, Android, WebGPU, and desktop.", freeType: "Open-source / Framework", url: "https://llm.mlc.ai/" },
    { name: "Faraday.dev (Local)", category: "Local / Self-Hosted Models", desc: "Desktop app specializing in AI character chat.", strengths: "Zero-configuration local setup, great character hub.", freeType: "Free App / Local", url: "https://faraday.dev/" },

    // --- Image Generation ---
    { name: "ComfyUI", category: "Image Generation", desc: "Powerful node-based graphical user interface for Stable Diffusion.", strengths: "Ultimate control, lightweight, supports bleeding-edge workflows.", freeType: "Open-source / Local", url: "https://github.com/comfyanonymous/ComfyUI" },
    { name: "Automatic1111", category: "Image Generation", desc: "The foundational web interface for Stable Diffusion.", strengths: "Massive extension ecosystem, huge community support.", freeType: "Open-source / Local", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui" },
    { name: "Fooocus", category: "Image Generation", desc: "Simplified image generation combining Midjourney simplicity with Stable Diffusion.", strengths: "Zero complex settings, beautiful results out of the box.", freeType: "Open-source / Local", url: "https://github.com/lllyasviel/Fooocus" },
    { name: "InvokeAI", category: "Image Generation", desc: "Professional studio for AI image generation.", strengths: "Unified canvas for outpainting, stellar UI, artist-focused.", freeType: "Open-source / Local", url: "https://invoke.com/" },
    { name: "Draw Things", category: "Image Generation", desc: "Stable Diffusion for Apple devices.", strengths: "Runs completely offline on Mac, iPad, and iPhone. Highly optimized.", freeType: "Free App / Local", url: "https://drawthings.ai/" },
    { name: "DiffusionBee", category: "Image Generation", desc: "The easiest way to generate AI art on your Mac.", strengths: "One-click install, native Mac app, runs offline.", freeType: "Free App / Local", url: "https://diffusionbee.com/" },
    { name: "Krita AI Diffusion", category: "Image Generation", desc: "Brings powerful local AI generation natively into the Krita painting app.", strengths: "Live painting with AI, real-time generation, perfect for artists.", freeType: "Open-source / Plugin", url: "https://github.com/Acly/krita-ai-diffusion" },
    { name: "StableSwarmUI", category: "Image Generation", desc: "Official Stability AI multi-backend UI.", strengths: "Accessible interface that compiles down to ComfyUI workflows.", freeType: "Open-source / Local", url: "https://github.com/Stability-AI/StableSwarmUI" },
    { name: "SD.Next", category: "Image Generation", desc: "Advanced fork of Automatic1111 with more modern backend support.", strengths: "Better support for non-Nvidia GPUs and Diffusers backend.", freeType: "Open-source / Local", url: "https://github.com/vladmandic/automatic" },
    { name: "RuinedFooocus", category: "Image Generation", desc: "A fork of Fooocus with extra advanced controls un-hidden.", strengths: "Midjourney-like quality but with more pro tweaking options.", freeType: "Open-source / Local", url: "https://github.com/runew0lf/RuinedFooocus" },
    { name: "Hugging Face Spaces", category: "Image Generation", desc: "Unlimited web access to open-source models via Gradio apps.", strengths: "Test Stable Diffusion 3, Flux, etc., entirely free via the web.", freeType: "Free Web", url: "https://huggingface.co/spaces" },
    { name: "Easy Diffusion", category: "Image Generation", desc: "1-click install for Stable Diffusion with a clean, simple UI.", strengths: "No technical knowledge needed, automatic updates.", freeType: "Open-source / Local", url: "https://easydiffusion.github.io/" },

    // --- Image Utilities ---
    { name: "Upscayl", category: "Image Utilities", desc: "Free and open source AI image upscaler.", strengths: "Cross-platform desktop app, drastically improves image resolution using local GPU.", freeType: "Open-source / Local", url: "https://upscayl.org/" },
    { name: "IOPaint", category: "Image Utilities", desc: "A free and open-source inpainting/outpainting tool.", strengths: "Remove objects from photos, uncrop, or edit parts of images locally.", freeType: "Open-source / Local", url: "https://github.com/Sanster/IOPaint" },
    { name: "ChaiNNer", category: "Image Utilities", desc: "Node-based image processing GUI.", strengths: "Chain together AI upscaling, face restoration, and background removal.", freeType: "Open-source / Local", url: "https://chainner.app/" },
    { name: "Rembg", category: "Image Utilities", desc: "Command line tool to remove image backgrounds.", strengths: "Works flawlessly locally without API calls.", freeType: "Open-source / Local", url: "https://github.com/danielgatis/rembg" },
    { name: "FaceFusion", category: "Image Utilities", desc: "Next generation face swapper and enhancer.", strengths: "Highly realistic, runs locally, purely open source.", freeType: "Open-source / Local", url: "https://github.com/facefusion/facefusion" },

    // --- Coding & App Development ---
    { name: "Continue.dev", category: "Coding & App Development", desc: "The leading open-source AI code assistant for VS Code and JetBrains.", strengths: "Connects to any local model (Ollama) or free APIs for autocomplete and chat.", freeType: "Open-source / Extension", url: "https://continue.dev/" },
    { name: "Codeium", category: "Coding & App Development", desc: "Extremely generous free tier for AI code completion.", strengths: "Faster than Copilot, unlimited use for individual developers.", freeType: "Free Web Service", url: "https://codeium.com/" },
    { name: "Tabby", category: "Coding & App Development", desc: "Self-hosted AI coding assistant.", strengths: "An open-source alternative to GitHub Copilot that runs totally locally.", freeType: "Open-source / Self-hosted", url: "https://tabby.tabbyml.com/" },
    { name: "Aider", category: "Coding & App Development", desc: "AI pair programming in your terminal.", strengths: "Works brilliantly with local models, edits files directly via git.", freeType: "Open-source / CLI", url: "https://aider.chat/" },
    { name: "OpenHands", category: "Coding & App Development", desc: "Open-source AI software engineer (formerly OpenDevin).", strengths: "Can execute code, browse the web, and build entire applications.", freeType: "Open-source / Local", url: "https://github.com/All-Hands-AI/OpenHands" },
    { name: "Devika", category: "Coding & App Development", desc: "Open-Source alternative to Devin.", strengths: "Agentic AI that understands instructions, writes code, and fixes bugs.", freeType: "Open-source / Local", url: "https://github.com/stitionai/devika" },
    { name: "GPT-Pilot", category: "Coding & App Development", desc: "Developer tool that writes 95% of the code for your app.", strengths: "Acts as a pair programmer, building apps step-by-step with you.", freeType: "Open-source / Local", url: "https://github.com/Pythagora-io/gpt-pilot" },
    { name: "Twinny", category: "Coding & App Development", desc: "VS Code extension for local AI code completion.", strengths: "Designed specifically to interface seamlessly with Ollama/LM Studio.", freeType: "Open-source / Extension", url: "https://github.com/rjmacarthy/twinny" },
    { name: "Sweep", category: "Coding & App Development", desc: "AI junior developer that turns bugs into pull requests.", strengths: "Open source core, great for local repository handling.", freeType: "Open-source / Tool", url: "https://sweep.dev/" },
    { name: "Mentat", category: "Coding & App Development", desc: "AI coding assistant that coordinates edits across multiple files.", strengths: "Understands repository context entirely locally.", freeType: "Open-source / CLI", url: "https://github.com/AbanteAI/mentat" },
    { name: "Fabric", category: "Coding & App Development", desc: "Open-source framework for augmenting humans using AI.", strengths: "Massive library of high-quality prompts delivered natively through the terminal.", freeType: "Open-source / CLI", url: "https://github.com/danielmiessler/fabric" },
    { name: "LLM (by Simon Willison)", category: "Coding & App Development", desc: "A CLI utility and Python library for interacting with Large Language Models.", strengths: "Pipe terminal outputs directly into local or remote models.", freeType: "Open-source / CLI", url: "https://llm.datasette.io/" },
    { name: "Cline", category: "Coding & App Development", desc: "An autonomous coding agent in your IDE (formerly Claude Dev).", strengths: "Can execute terminal commands and use local models via Ollama integration.", freeType: "Open-source / Extension", url: "https://github.com/cline/cline" },
    { name: "Page Assist", category: "Coding & App Development", desc: "Open-source browser extension that brings your local AI everywhere.", strengths: "Interfaces with Ollama directly to inject AI chat into any webpage.", freeType: "Open-source / Extension", url: "https://github.com/n4ze3m/page-assist" },

    // --- Audio & Voice ---
    { name: "Whisper.cpp", category: "Audio & Voice", desc: "High-performance inference of OpenAI's Whisper automatic speech recognition.", strengths: "Runs blazing fast on CPU, perfect for local transcriptions.", freeType: "Open-source / Local", url: "https://github.com/ggerganov/whisper.cpp" },
    { name: "Faster-Whisper", category: "Audio & Voice", desc: "Reimplementation of Whisper using CTranslate2.", strengths: "Up to 4x faster than original Whisper with the same accuracy.", freeType: "Open-source / Local", url: "https://github.com/SYSTRAN/faster-whisper" },
    { name: "WhisperX", category: "Audio & Voice", desc: "Fast automatic speech recognition with word-level timestamps and speaker diarization.", strengths: "Identifies who is speaking and when, fully locally.", freeType: "Open-source / Local", url: "https://github.com/m-bain/whisperX" },
    { name: "MacWhisper", category: "Audio & Voice", desc: "Native macOS app for local Whisper transcription.", strengths: "Drag and drop audio files, highly optimized for Apple Silicon (Free version is very capable).", freeType: "Free App / Local", url: "https://goodsnooze.gumroad.com/l/macwhisper" },
    { name: "Piper TTS", category: "Audio & Voice", desc: "Fast, local neural text-to-speech system.", strengths: "Runs on a Raspberry Pi, extremely lightweight and high quality.", freeType: "Open-source / Local", url: "https://github.com/rhasspy/piper" },
    { name: "Bark", category: "Audio & Voice", desc: "Transformer-based text-to-audio model by Suno.", strengths: "Can generate highly realistic speech, non-speech sounds (laughs, sighs), and music.", freeType: "Open-source / Local", url: "https://github.com/suno-ai/bark" },
    { name: "Tortoise TTS", category: "Audio & Voice", desc: "A multi-voice TTS system emphasizing quality and cloning.", strengths: "Produces some of the most realistic local voice cloning available.", freeType: "Open-source / Local", url: "https://github.com/neonbjb/tortoise-tts" },
    { name: "AllTalk TTS", category: "Audio & Voice", desc: "Text-to-speech engine fine-tuned for local LLM roleplay.", strengths: "Integrates directly with Text Generation WebUI.", freeType: "Open-source / Local", url: "https://github.com/erew123/alltalk_tts" },
    { name: "AudioCraft", category: "Audio & Voice", desc: "Library for audio processing and generation by Meta.", strengths: "Run MusicGen locally to create high-quality music from text prompts.", freeType: "Open-source / Local", url: "https://github.com/facebookresearch/audiocraft" },
    { name: "OpenVoice", category: "Audio & Voice", desc: "Versatile instant voice cloning locally.", strengths: "Requires only seconds of reference audio to clone a voice perfectly.", freeType: "Open-source / Local", url: "https://github.com/myshell-ai/OpenVoice" },
    { name: "F5-TTS", category: "Audio & Voice", desc: "Fairytaler non-autoregressive TTS system.", strengths: "Highly robust, fast, and natural sounding voice generation.", freeType: "Open-source / Local", url: "https://github.com/SWivid/F5-TTS" },
    { name: "CosyVoice", category: "Audio & Voice", desc: "Multi-lingual large voice generation model by Alibaba.", strengths: "Zero-shot voice cloning with granular control.", freeType: "Open-source / Local", url: "https://github.com/FunAudioLLM/CosyVoice" },
    { name: "Audacity OpenVINO", category: "Audio & Voice", desc: "AI plugins for the classic open-source audio editor.", strengths: "Brings noise suppression, transcription, and music separation directly to Audacity.", freeType: "Open-source / Plugin", url: "https://github.com/intel/openvino-plugins-ai-audacity" },
    { name: "XTTS", category: "Audio & Voice", desc: "Advanced voice generation model by Coqui.", strengths: "High quality voice cloning and cross-lingual generation locally.", freeType: "Open-source / Local", url: "https://github.com/coqui-ai/TTS" },

    // --- Video Generation & Editing ---
    { name: "CogVideoX", category: "Video Generation & Editing", desc: "State-of-the-art open source text-to-video generation.", strengths: "Can be run locally via ComfyUI, produces incredibly coherent video.", freeType: "Open-source / Local", url: "https://github.com/THUDM/CogVideo" },
    { name: "AnimateDiff", category: "Video Generation & Editing", desc: "Framework to animate Stable Diffusion models.", strengths: "Turn any static local model into an animation engine.", freeType: "Open-source / Local", url: "https://github.com/guoyww/AnimateDiff" },
    { name: "EbSynth", category: "Video Generation & Editing", desc: "Bring painted style to video.", strengths: "Paint over a single video frame and EbSynth propagates it to the rest of the video.", freeType: "Free App / Local", url: "https://ebsynth.com/" },
    { name: "StreamDiffusion", category: "Video Generation & Editing", desc: "Real-time interactive generation pipeline.", strengths: "Generate 100+ frames per second for real-time video or gaming applications.", freeType: "Open-source / Local", url: "https://github.com/cumulo-autumn/StreamDiffusion" },
    { name: "LivePortrait", category: "Video Generation & Editing", desc: "Efficient portrait animation with fine control.", strengths: "Makes static portrait photos talk and blink naturally using a driving video.", freeType: "Open-source / Local", url: "https://github.com/KwaiVGI/LivePortrait" },
    { name: "RIFE", category: "Video Generation & Editing", desc: "Real-Time Intermediate Flow Estimation for video interpolation.", strengths: "Make slow-motion videos out of standard footage or boost FPS smoothly.", freeType: "Open-source / Local", url: "https://github.com/hzwer/ECCV2022-RIFE" },
    { name: "Flowframes", category: "Video Generation & Editing", desc: "Video interpolation GUI.", strengths: "Windows app that makes using RIFE and DAIN incredibly easy.", freeType: "Free App / Local", url: "https://nmkd.itch.io/flowframes" },

    // --- Research & Search ---
    { name: "PrivateGPT", category: "Research & Search", desc: "Interact privately with your documents using local LLMs.", strengths: "100% offline document chatting. No data leaves your machine.", freeType: "Open-source / Local", url: "https://github.com/zylon-ai/privateGPT" },
    { name: "Quivr", category: "Research & Search", desc: "Your generative AI second brain.", strengths: "Self-hosted RAG framework to store and chat with all your data.", freeType: "Open-source / Self-hosted", url: "https://github.com/QuivrHQ/quivr" },
    { name: "Khoj", category: "Research & Search", desc: "AI personal assistant for your digital brain.", strengths: "Integrates with Obsidian, Emacs, and runs locally to search your notes.", freeType: "Open-source / Local", url: "https://khoj.dev/" },
    { name: "DocsGPT", category: "Research & Search", desc: "Chat with your documentation.", strengths: "Open-source solution for developers to chat directly with codebases/docs.", freeType: "Open-source / Self-hosted", url: "https://github.com/arc53/DocsGPT" },
    { name: "Dify", category: "Research & Search", desc: "LLM application development platform.", strengths: "Build complex RAG search engines and AI apps visually. Self-hostable.", freeType: "Open-source / Self-hosted", url: "https://dify.ai/" },
    { name: "Flowise", category: "Research & Search", desc: "Drag & drop UI to build customized LLM flows.", strengths: "Easiest way to build your own local research assistants without coding.", freeType: "Open-source / Self-hosted", url: "https://flowiseai.com/" },
    { name: "Langflow", category: "Research & Search", desc: "UI for LangChain, designed to iterate RAG pipelines.", strengths: "Highly visual way to connect vector databases and local models.", freeType: "Open-source / Self-hosted", url: "https://www.langflow.org/" },
    { name: "Embedchain", category: "Research & Search", desc: "Data platform for LLMs.", strengths: "Load any data set (YouTube, PDF, Web) into a local vector store in 3 lines of code.", freeType: "Open-source / Framework", url: "https://github.com/embedchain/embedchain" },
    { name: "Haystack", category: "Research & Search", desc: "End-to-end framework for building NLP pipelines.", strengths: "Highly modular, great for building custom local enterprise search.", freeType: "Open-source / Framework", url: "https://github.com/deepset-ai/haystack" },
    { name: "LlamaIndex", category: "Research & Search", desc: "Data framework for your LLM applications.", strengths: "The industry standard for ingesting and structuring data for local AI search.", freeType: "Open-source / Framework", url: "https://www.llamaindex.ai/" },
    { name: "Chroma", category: "Research & Search", desc: "The AI-native open-source embedding database.", strengths: "Runs locally, easiest vector database to get started with.", freeType: "Open-source / Local", url: "https://www.trychroma.com/" },
    { name: "Milvus", category: "Research & Search", desc: "Highly scalable open-source vector database.", strengths: "For massive local research indexing requirements.", freeType: "Open-source / Self-hosted", url: "https://milvus.io/" },
    { name: "Qdrant", category: "Research & Search", desc: "Vector Search Engine for the next generation of AI.", strengths: "Written in Rust, exceedingly fast and low-resource.", freeType: "Open-source / Self-hosted", url: "https://qdrant.tech/" },
    { name: "Weaviate", category: "Research & Search", desc: "Open-source vector database.", strengths: "Built-in modules to run local embeddings via transformers.", freeType: "Open-source / Self-hosted", url: "https://weaviate.io/" },
    { name: "SearxNG", category: "Research & Search", desc: "Free internet metasearch engine.", strengths: "Can be plugged into local AI frameworks to provide private web access.", freeType: "Open-source / Self-hosted", url: "https://docs.searxng.org/" },

    // --- Writing & Content Creation ---
    { name: "HuggingChat", category: "Writing & Content Creation", desc: "Hugging Face's open-source alternative to ChatGPT.", strengths: "Unlimited free access to Llama 3, Command R+, and more top-tier models.", freeType: "Free Web Service", url: "https://huggingface.co/chat/" },
    { name: "DuckDuckGo AI Chat", category: "Writing & Content Creation", desc: "Anonymous access to top AI models.", strengths: "No login required, complete privacy, free access to Claude 3 Haiku, Llama 3.", freeType: "Free Web Service", url: "https://duckduckgo.com/chat" },
    { name: "Brave Leo", category: "Writing & Content Creation", desc: "AI assistant built into the Brave browser.", strengths: "Completely free, private by default, runs on Mixtral/Llama.", freeType: "Free Browser Feature", url: "https://brave.com/leo/" },
    { name: "LMSYS Chatbot Arena", category: "Writing & Content Creation", desc: "Open platform for evaluating LLMs by human preference.", strengths: "Use virtually any top-tier AI model for free in exchange for rating them.", freeType: "Free Web Service", url: "https://chat.lmsys.org/" },
    { name: "Google AI Studio", category: "Writing & Content Creation", desc: "Developer environment for Google's Gemini models.", strengths: "Astoundingly generous free tier offering state-of-the-art Gemini 1.5 Pro.", freeType: "Free Web Service", url: "https://aistudio.google.com/" },
    { name: "Outlines", category: "Writing & Content Creation", desc: "Structured text generation for local models.", strengths: "Force your local LLMs to output strictly in JSON, Markdown, or Regex patterns.", freeType: "Open-source / Framework", url: "https://github.com/outlines-dev/outlines" },
    { name: "Guidance", category: "Writing & Content Creation", desc: "A guidance language for controlling large language models.", strengths: "Mixes generation with logic, maximizing local model efficiency.", freeType: "Open-source / Framework", url: "https://github.com/guidance-ai/guidance" },

    // --- Productivity & Automation ---
    { name: "n8n", category: "Productivity & Automation", desc: "Workflow automation tool with native AI nodes.", strengths: "Self-hostable alternative to Zapier with infinite local AI steps.", freeType: "Fair-code / Self-hosted", url: "https://n8n.io/" },
    { name: "AutoGPT", category: "Productivity & Automation", desc: "An experimental open-source attempt to make GPT-4 fully autonomous.", strengths: "Can chain thoughts and execute web/system commands locally.", freeType: "Open-source / Local", url: "https://github.com/Significant-Gravitas/AutoGPT" },
    { name: "BabyAGI", category: "Productivity & Automation", desc: "Task-driven autonomous agent.", strengths: "Creates tasks based on objectives and executes them iteratively.", freeType: "Open-source / Python", url: "https://github.com/yoheinakajima/babyagi" },
    { name: "CrewAI", category: "Productivity & Automation", desc: "Framework for orchestrating role-playing, autonomous AI agents.", strengths: "Assign roles to local LLMs (e.g., Researcher, Writer) and let them collaborate.", freeType: "Open-source / Framework", url: "https://www.crewai.com/" },
    { name: "AutoGen", category: "Productivity & Automation", desc: "Microsoft's multi-agent conversation framework.", strengths: "Complex autonomous agent networks that can write and execute code.", freeType: "Open-source / Framework", url: "https://github.com/microsoft/autogen" },
    { name: "smolagents", category: "Productivity & Automation", desc: "Hugging Face library for lightweight agentic workflows.", strengths: "Write agents in just a few lines of code. Incredible simplicity.", freeType: "Open-source / Python", url: "https://github.com/huggingface/smolagents" },
    { name: "Semantic Kernel", category: "Productivity & Automation", desc: "Microsoft's SDK to integrate AI into existing apps.", strengths: "Great for C# and enterprise local AI automation.", freeType: "Open-source / SDK", url: "https://github.com/microsoft/semantic-kernel" },
    { name: "Phidata", category: "Productivity & Automation", desc: "Build AI Assistants with memory, knowledge, and tools.", strengths: "Streamlines building production-grade local autonomous assistants.", freeType: "Open-source / Framework", url: "https://github.com/phidatahq/phidata" },
    { name: "PraisonAI", category: "Productivity & Automation", desc: "UI for managing and generating autonomous agent workflows.", strengths: "Low-code interface connecting to AutoGen and CrewAI frameworks.", freeType: "Open-source / Local", url: "https://github.com/MervinPraison/PraisonAI" },

    // --- Vision & OCR ---
    { name: "Surya", category: "Vision & OCR", desc: "Multilingual document OCR toolkit.", strengths: "Finds text boxes and extracts text accurately across 90+ languages locally.", freeType: "Open-source / Local", url: "https://github.com/VikParuchuri/surya" },
    { name: "Marker", category: "Vision & OCR", desc: "Convert PDF to Markdown quickly and highly accurately.", strengths: "Perfect for preparing documents for RAG systems locally.", freeType: "Open-source / Local", url: "https://github.com/VikParuchuri/marker" },
    { name: "Tesseract", category: "Vision & OCR", desc: "Classic open-source OCR engine maintained by Google.", strengths: "Runs on potato hardware, completely offline, deeply reliable.", freeType: "Open-source / Local", url: "https://github.com/tesseract-ocr/tesseract" },
    { name: "LLaVA", category: "Vision & OCR", desc: "Large Language and Vision Assistant.", strengths: "Run massive open-source vision models locally to ask questions about images.", freeType: "Open-source / Local", url: "https://llava-vl.github.io/" },
    { name: "Florence-2", category: "Vision & OCR", desc: "Advanced vision foundation model by Microsoft.", strengths: "Incredible zero-shot object detection and captioning that runs on consumer GPUs.", freeType: "Open-source / Local", url: "https://huggingface.co/microsoft/Florence-2-large" }
];

// ==========================================
// APP LOGIC
// ==========================================

const contentArea = document.getElementById('content-area');
const categoryList = document.getElementById('category-list');
const searchInput = document.getElementById('search-input');
let currentView = 'home';
let currentCategory = '';

// Extract unique categories
const categories = [...new Set(toolsDatabase.map(t => t.category))].sort();

// Initialize App
function init() {
    renderCategorySidebar();
    setupMobileMenu();
    setupSearch();
    navigate('home');
    lucide.createIcons();
}

// Sidebar Rendering
function renderCategorySidebar() {
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="navigate('category', '${cat}')" id="cat-${sanitizeId(cat)}" class="nav-link flex items-center px-2 py-1.5 text-sm rounded-md hover:bg-slate-100 text-slate-700 transition-colors">
            <i data-lucide="folder" class="w-3.5 h-3.5 mr-2 text-slate-400"></i> ${cat}
        </a>`;
        categoryList.appendChild(li);
    });
}

// Navigation Handler
function navigate(view, data = null) {
    currentView = view;
    currentCategory = data;
    
    // Update active states
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('bg-slate-100', 'font-medium', 'text-primary');
        el.classList.add('text-slate-700');
    });

    if (view === 'home') setActive('nav-home');
    else if (view === 'all') setActive('nav-all');
    else if (view === 'about') setActive('nav-about');
    else if (view === 'category') setActive(`cat-${sanitizeId(data)}`);

    // Render Content
    if (view === 'home') renderHome();
    else if (view === 'all') renderList('All Tools', toolsDatabase);
    else if (view === 'about') renderAbout();
    else if (view === 'category') renderList(data, toolsDatabase.filter(t => t.category === data));

    // Close mobile menu if open
    closeMobileMenu();
    window.scrollTo(0, 0);
    lucide.createIcons();
}

// Helper for UI active state
function setActive(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('bg-slate-100', 'font-medium', 'text-primary');
        el.classList.remove('text-slate-700');
    }
}

// Sanitize string for IDs
function sanitizeId(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// --- Views ---

function renderHome() {
    contentArea.innerHTML = `
        <div class="mb-10 animate-fade-in">
            <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">The best completely free AI tools.<br><span class="text-primary">No limits, no tiers, no catch.</span></h1>
            <p class="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Welcome to FreeAI Hub. The AI space is full of "free" tools that demand a credit card after 5 uses. 
                We curate strictly open-source, fully self-hostable, or generously unmetered web AI tools. 
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div onclick="navigate('category', 'Local / Self-Hosted Models')" class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition cursor-pointer">
                <i data-lucide="cpu" class="w-8 h-8 text-primary mb-3"></i>
                <h3 class="font-bold text-slate-900">Local Models</h3>
                <p class="text-sm text-slate-500 mt-1">Run LLMs directly on your hardware. 100% private.</p>
            </div>
            <div onclick="navigate('category', 'Image Generation')" class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition cursor-pointer">
                <i data-lucide="image" class="w-8 h-8 text-primary mb-3"></i>
                <h3 class="font-bold text-slate-900">Image Generation</h3>
                <p class="text-sm text-slate-500 mt-1">Create unlimited images without credit systems.</p>
            </div>
            <div onclick="navigate('category', 'Coding & App Development')" class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition cursor-pointer">
                <i data-lucide="code" class="w-8 h-8 text-primary mb-3"></i>
                <h3 class="font-bold text-slate-900">Coding Assistants</h3>
                <p class="text-sm text-slate-500 mt-1">Open-source alternatives to GitHub Copilot.</p>
            </div>
        </div>

        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold tracking-tight text-slate-900">Featured Picks</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${generateToolCards(toolsDatabase.filter(t => ['Ollama', 'ComfyUI', 'Continue.dev', 'Whisper.cpp'].includes(t.name)))}
        </div>
    `;
}

function renderList(title, tools) {
    if (tools.length === 0) {
        contentArea.innerHTML = `
            <div class="mb-6"><h1 class="text-3xl font-bold tracking-tight text-slate-900">${title}</h1></div>
            <div class="p-10 text-center text-slate-500 bg-white rounded-xl border border-slate-200">No tools found matching your criteria.</div>
        `;
        return;
    }

    contentArea.innerHTML = `
        <div class="mb-6 flex items-end justify-between">
            <div>
                <h1 class="text-3xl font-bold tracking-tight text-slate-900">${title}</h1>
                <p class="text-sm text-slate-500 mt-2">${tools.length} highly curated tool${tools.length !== 1 ? 's' : ''} available.</p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            ${generateToolCards(tools)}
        </div>
    `;
}

function renderAbout() {
    contentArea.innerHTML = `
        <div class="max-w-3xl bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h1 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">About FreeAI Hub</h1>
            <div class="prose prose-slate">
                <p class="text-slate-600 mb-4 leading-relaxed">
                    The modern internet is infested with "AI Directories" that act as thinly-veiled affiliate marketing funnels. They promote tools with aggressive paywalls, subscription models, and restrictive token limits.
                </p>
                <p class="text-slate-600 mb-6 leading-relaxed">
                    <strong>FreeAI Hub</strong> was built with a different philosophy: an elite, meticulously curated wiki of AI tools that are <em>genuinely free</em>. 
                </p>
                
                <h3 class="text-xl font-bold text-slate-900 mb-3">Our Curation Criteria</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>Open Source & Local:</strong> Software you can download, inspect, and run on your own hardware forever.</li>
                    <li><strong>Self-Hostable:</strong> Enterprise-grade tools that offer a free self-hosted edition.</li>
                    <li><strong>Truly Free Web Tools:</strong> Web-based tools with generous, unmetered access and absolutely no mandatory paywalls.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mb-3">How to Contribute</h3>
                <p class="text-slate-600 mb-4 leading-relaxed">
                    FreeAI Hub is an open project. If you know a tool that meets our strict criteria, you can submit a Pull Request to our GitHub repository. We require clear documentation, no deceptive pricing, and true utility.
                </p>
            </div>
        </div>
    `;
}

// --- Component Generation ---

function generateToolCards(tools) {
    return tools.map(t => `
        <div class="group relative flex flex-col items-start justify-between bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div class="flex items-center gap-3 w-full mb-3">
                <h3 class="text-lg font-bold text-slate-900">${t.name}</h3>
                <span class="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 ml-auto whitespace-nowrap">${t.freeType}</span>
            </div>
            <p class="text-sm text-slate-600 mb-4 flex-grow">${t.desc}</p>
            <div class="text-xs text-slate-500 mb-5 bg-slate-50 p-2.5 rounded-md w-full border border-slate-100">
                <strong class="text-slate-700">Why it rocks:</strong> ${t.strengths}
            </div>
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-semibold text-primary hover:text-indigo-500 transition-colors">
                Visit Website <i data-lucide="external-link" class="w-3.5 h-3.5 ml-1"></i>
            </a>
        </div>
    `).join('');
}

// --- Search Functionality ---

function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            navigate('home');
            return;
        }
        
        const results = toolsDatabase.filter(t => 
            t.name.toLowerCase().includes(query) || 
            t.desc.toLowerCase().includes(query) ||
            t.category.toLowerCase().includes(query)
        );
        
        renderList(`Search: "${query}"`, results);
        
        // Remove active states from sidebar
        document.querySelectorAll('.nav-link').forEach(el => {
            el.classList.remove('bg-slate-100', 'font-medium', 'text-primary');
            el.classList.add('text-slate-700');
        });
        lucide.createIcons();
    });
}

// --- Mobile Menu Handling ---

const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

function toggleMobileMenu() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        mobileOverlay.classList.remove('hidden');
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    sidebar.classList.add('-translate-x-full');
    mobileOverlay.classList.add('hidden');
}

// Boot
init();