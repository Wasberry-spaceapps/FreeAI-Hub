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
        <div class="max-w-4xl bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h1 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">🌟 FreeAI Hub: The Ultimate Beginner's Guide to Local & Free AI</h1>
            
            <div class="prose prose-slate max-w-none">
                <p class="text-slate-600 mb-6 leading-relaxed">
                    Welcome to the official repository for <strong><a href="https://wasberry-spaceapps.github.io/FreeAI-Hub/" class="text-primary hover:underline" target="_blank">FreeAI Hub</a></strong>! 
                    If you are brand new to the world of Artificial Intelligence and want to learn how to run powerful AI tools <em>for free</em>, on your <em>own computer</em>, without paying for subscriptions — you are in the right place. This guide is written specifically for you, no computer science degree required. Grab a cup of coffee, and let's dive in.
                </p>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">📖 SECTION 1: Welcome & What This Site Is</h2>
                <p class="text-slate-600 mb-4 leading-relaxed">
                    <strong>FreeAI Hub</strong> is a curated directory of completely free, open-source, and local AI tools. We built this because the internet is full of "free" AI tools that ask for your credit card after 5 uses. Everything listed on FreeAI Hub is either 100% free to use on the web, or software you download and run yourself.
                </p>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">☁️ Cloud AI vs. 💻 Local AI</h3>
                <p class="text-slate-600 mb-2">Most people know AI through <strong>Cloud AI</strong> tools like ChatGPT, Claude, or Google Gemini. </p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                    <li><strong>How it works:</strong> You type a message, it sends your data to a massive server farm, the server thinks, and sends the answer back.</li>
                    <li><strong>The Catch:</strong> It costs them money, so they charge you $20/month, put limits on your usage, and read your chats to train future models.</li>
                </ul>

                <p class="text-slate-600 mb-2"><strong>Local AI</strong> is the exact opposite.</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>How it works:</strong> You download the AI's "brain" (a file) to your computer. When you talk to it, your own processor does the thinking.</li>
                    <li><strong>The Magic:</strong> No internet connection required.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🛡️ Why Local AI Matters</h3>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>Absolute Privacy:</strong> Your data never leaves your device. You can feed it your personal diary, financial documents, or private code without fear.</li>
                    <li><strong>No Subscriptions:</strong> It is 100% free forever. No $20/month fees.</li>
                    <li><strong>No Usage Limits:</strong> Generate 10,000 images or chat for 24 hours straight. The only limit is your electricity bill.</li>
                    <li><strong>Uncensored & Unfiltered:</strong> Local models do exactly what you tell them to do, without corporate guardrails interrupting you.</li>
                </ol>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">🧭 SECTION 2: How to Navigate the Site</h2>
                <p class="text-slate-600 mb-4 leading-relaxed">The FreeAI Hub website is designed to be as simple as possible. Here is how to use it:</p>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Browsing Categories</h3>
                <p class="text-slate-600 mb-4 leading-relaxed">On the left sidebar (or under the hamburger menu on mobile), you'll see categories like <strong>Text</strong>, <strong>Image Generation</strong>, <strong>Audio</strong>, and <strong>Code</strong>. Click any of these to filter the tools.</p>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Understanding the Badges</h3>
                <p class="text-slate-600 mb-2">On every tool card, you'll see a small colored badge. Here is what they mean:</p>
                <ul class="list-none space-y-2 text-slate-600 mb-4">
                    <li>🟢 <strong>Local:</strong> You need to download and run this on your own PC. (We'll teach you how below!)</li>
                    <li>🔵 <strong>Free Web / API:</strong> This runs in your browser on someone else's computer, but it is generously free with no hard paywalls.</li>
                    <li>🟣 <strong>Open Source:</strong> The code that makes the tool work is public. Anyone can inspect it or modify it.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Reading a Tool Card</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                    <li><strong>Title:</strong> The exact name of the software.</li>
                    <li><strong>Description:</strong> A simple, one-sentence summary of what the tool actually does.</li>
                    <li><strong>Why it rocks:</strong> The main reason we curated it (e.g., "Best for slow computers" or "Insanely realistic voices").</li>
                    <li><strong>Link:</strong> Click "Visit Website" to go directly to the official download page.</li>
                </ul>

                <blockquote class="border-l-4 border-primary bg-indigo-50 p-4 rounded-r-md text-slate-700 my-6">
                    💡 <strong>Tip for Beginners:</strong> Look for tools in the directory described as "1-click install" or "GUI" (Graphical User Interface). Avoid tools that say "CLI" (Command Line Interface) until you feel more comfortable!
                </blockquote>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">🖥️ SECTION 3: "Can My PC Run This?" — The Complete Hardware Guide</h2>
                <p class="text-slate-600 mb-4 leading-relaxed">Running AI locally requires computing power. The two most important parts of your computer for AI are <strong>RAM</strong> (System Memory) and <strong>VRAM</strong> (Video Memory on your Graphics Card).</p>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🧠 System RAM Guide</h3>
                <div class="overflow-x-auto mb-6">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-100 text-slate-700">
                                <th class="p-3 border border-slate-200">Your RAM</th>
                                <th class="p-3 border border-slate-200">What You Can Run</th>
                                <th class="p-3 border border-slate-200">Example Models</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-600">
                            <tr>
                                <td class="p-3 border border-slate-200 font-bold">4GB</td>
                                <td class="p-3 border border-slate-200">Tiny models. They aren't incredibly smart, but they work!</td>
                                <td class="p-3 border border-slate-200">TinyLlama 1.1B, Phi-3 Mini (Q4), Gemma 2B</td>
                            </tr>
                            <tr class="bg-slate-50">
                                <td class="p-3 border border-slate-200 font-bold">8GB</td>
                                <td class="p-3 border border-slate-200"><strong>The Sweet Spot for Beginners.</strong> Good for daily assistants.</td>
                                <td class="p-3 border border-slate-200">Llama 3 8B (Q4), Mistral 7B, CodeGemma 7B</td>
                            </tr>
                            <tr>
                                <td class="p-3 border border-slate-200 font-bold">16GB</td>
                                <td class="p-3 border border-slate-200"><strong>Comfortable Tier.</strong> Can run smart models while keeping other apps open.</td>
                                <td class="p-3 border border-slate-200">Llama 3.2 11B, Gemma 9B, Command R (highly compressed)</td>
                            </tr>
                            <tr class="bg-slate-50">
                                <td class="p-3 border border-slate-200 font-bold">32GB</td>
                                <td class="p-3 border border-slate-200"><strong>Power User.</strong> Capable of running large, incredibly smart models.</td>
                                <td class="p-3 border border-slate-200">Mixtral 8x7B, WizardCoder 34B, Llama 3 70B (tight fit!)</td>
                            </tr>
                            <tr>
                                <td class="p-3 border border-slate-200 font-bold">64GB+</td>
                                <td class="p-3 border border-slate-200"><strong>Enthusiast.</strong> Can run massive enterprise-grade models smoothly.</td>
                                <td class="p-3 border border-slate-200">Full uncompressed Llama 3 70B, Command R+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🎮 GPU (Graphics Card) Guide</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>No GPU (CPU Only):</strong> Yes, you can run AI without a graphics card! It will just be a bit slower (like a human typing). Stick to heavily compressed (Q4) models.</li>
                    <li><strong>Integrated Graphics (Intel UHD / AMD Radeon):</strong> Slightly faster than CPU, but shares system RAM.</li>
                    <li><strong>Entry NVIDIA (4GB VRAM - GTX 1650, RTX 3050):</strong> Great for generating 1 image at a time, or running small 7B text models at high speeds.</li>
                    <li><strong>Mid-range NVIDIA (8GB VRAM - RTX 3060, 4060):</strong> The perfect starting point. Runs 8B-13B models beautifully and generates images quickly.</li>
                    <li><strong>High-end NVIDIA (16GB–24GB VRAM - RTX 4080, 4090):</strong> The absolute dream. Can run complex 34B-70B models at blistering speeds.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🗜️ What is "Quantization"? (Q4, Q5, Q8)</h3>
                <p class="text-slate-600 mb-4 leading-relaxed">When you browse for AI models, you will see weird numbers like <code>Q4</code> or <code>Q8</code>. <strong>Quantization is just compression.</strong></p>
                <p class="text-slate-600 mb-4 leading-relaxed">Think of a raw 4K photograph. It looks amazing, but the file size is 50MB and it takes forever to load. If you compress it to a JPEG, the file size drops to 5MB, it loads instantly, and <em>it still looks 95% identical to the human eye</em>.</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>F16 / Unquantized:</strong> The massive, original "4K photo" of the AI.</li>
                    <li><strong>Q8 (8-bit):</strong> High quality, slightly smaller.</li>
                    <li><strong>Q5 / Q4 (4-bit):</strong> The ultimate JPEG. Shrinks the AI by 70%, makes it run incredibly fast on normal laptops, and is still 95% as smart. <strong>Always choose Q4 or Q5 if you are a beginner!</strong></li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">💾 Storage Requirements</h3>
                <p class="text-slate-600 mb-2">AI models are large files. Make sure you have hard drive space!</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>1B - 3B Parameters:</strong> ~2GB to 3GB of space.</li>
                    <li><strong>7B - 8B Parameters:</strong> ~4GB to 6GB of space.</li>
                    <li><strong>30B+ Parameters:</strong> 20GB+ of space.</li>
                </ul>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">🚀 SECTION 4: How to Run Models — Step-by-Step Guides</h2>
                
                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Option A: Ollama (Highly Recommended)</h3>
                <p class="text-slate-600 mb-2">Ollama is a tiny program that runs silently in the background and makes running AI as easy as typing a single sentence.</p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>Install:</strong> Go to <a href="https://ollama.com" class="text-primary hover:underline" target="_blank">Ollama.com</a> and download the installer for Windows or Mac. (If on Linux, open terminal and paste: <code>curl -fsSL https://ollama.com/install.sh | sh</code>).</li>
                    <li><strong>Run:</strong> Open your computer's Terminal (Mac) or Command Prompt (Windows).</li>
                    <li><strong>Type this command and press Enter:</strong>
                        <pre class="bg-slate-900 text-slate-50 p-4 rounded-md mt-2 mb-2 overflow-x-auto"><code>ollama run llama3</code></pre>
                    </li>
                    <li><strong>Wait:</strong> It will download the model (about 4.7GB). Once done, you can chat with it right there in the black box!</li>
                    <li><strong>Get a nice interface:</strong> Staring at a terminal is boring. Download <strong>Open WebUI</strong> or <strong>Page Assist</strong> (from the FreeAI Hub directory) to get a beautiful, ChatGPT-like interface that connects automatically to Ollama.</li>
                </ol>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Option B: LM Studio</h3>
                <p class="text-slate-600 mb-2">LM Studio is a beautiful desktop app. No terminals required.</p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li>Download <strong>LM Studio</strong> from our directory.</li>
                    <li>Open the app. In the search bar at the top, type <code>Llama 3 Instruct</code>.</li>
                    <li>A list of files will appear on the right. Look for one that says <code>Q4_K_M</code> (remember quantization?) and click <strong>Download</strong>.</li>
                    <li>Click the "Speech Bubble" icon on the left menu to open the chat window.</li>
                    <li>At the top of the chat, select your downloaded model from the dropdown menu, and start typing!</li>
                </ol>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Option C: GPT4All</h3>
                <p class="text-slate-600 mb-2">The absolute easiest option for total beginners.</p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li>Download <strong>GPT4All</strong> from our directory.</li>
                    <li>Install it just like a normal video game or web browser.</li>
                    <li>Open it. It will immediately show you a list of recommended models. Click download on one.</li>
                    <li>Start chatting. It handles all the computer hardware stuff invisibly in the background.</li>
                </ol>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Option D: Jan.ai</h3>
                <p class="text-slate-600 mb-2">A gorgeous, open-source alternative to LM Studio.</p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li>Download <strong>Jan</strong>.</li>
                    <li>Go to the "Hub" tab (the little grid icon).</li>
                    <li>Click download on a model (it recommends the best ones for your PC automatically).</li>
                    <li>Go to the "Thread" tab and say hello.</li>
                </ol>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🎨 For Image Generation: ComfyUI & AUTOMATIC1111</h3>
                <p class="text-slate-600 mb-2">Image generation uses a technology called <strong>Stable Diffusion</strong>. To run it, you need a User Interface (UI).</p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>Get the UI:</strong> Download a 1-click installer for <strong>ComfyUI</strong> or <strong>AUTOMATIC1111</strong> (search them on FreeAI Hub). Extract the folder to your desktop and double click the "Run" file.</li>
                    <li><strong>Get a Model (Checkpoint):</strong> Go to CivitAI.com or Hugging Face. Download a <code>.safetensors</code> file (these are the image AI brains).</li>
                    <li><strong>Place the File:</strong> Drag that file into the <code>models/Stable-diffusion</code> folder inside your ComfyUI or AUTOMATIC1111 directory.</li>
                    <li><strong>Refresh & Generate:</strong> Go back to the web browser where your UI opened, select your new model from the dropdown, type "A cute cat in space," and hit Generate!</li>
                </ol>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">🤗 SECTION 5: Hugging Face — Finding & Downloading Models</h2>
                <p class="text-slate-600 mb-4 leading-relaxed"><strong>Hugging Face</strong> is the "GitHub of AI." It is a massive, free website where researchers and hobbyists upload their AI models.</p>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">How to Search & Read Model Cards</h3>
                <p class="text-slate-600 mb-2">When you search for a model (like "Mistral"), you'll click on it and see a <strong>Model Card</strong>. This is just a ReadMe file that tells you:</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                    <li>What the model is good at.</li>
                    <li>What <strong>License</strong> it has (e.g., Apache 2.0 means you can do whatever you want with it).</li>
                    <li>How to format your prompts.</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">The Magic of "GGUF"</h3>
                <p class="text-slate-600 mb-2">If you want to run a model on your laptop, <strong>you must look for models that end in "GGUF".</strong></p>
                <p class="text-slate-600 mb-2">GGUF is a special file format created so AI can run efficiently on normal consumer CPUs and GPUs, rather than million-dollar supercomputers.</p>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                    <li><em>Tip:</em> If you want Llama-3, search Hugging Face for <code>Llama-3-8B-GGUF</code>. (Usually uploaded by a saint named <em>Bartowski</em> or <em>TheBloke</em>).</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">How to Download</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                    <li><strong>Browser:</strong> Click the "Files and versions" tab on Hugging Face, find the <code>Q4_K_M.gguf</code> file, and click the little download arrow.</li>
                    <li><strong>Easier way:</strong> Just use LM Studio's built-in search bar, which searches Hugging Face for you!</li>
                </ul>

                <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">🏆 Beginner Starter Pack (Search these names!)</h3>
                <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                    <li><strong>Text / General Chat:</strong> <code>Meta-Llama-3-8B-Instruct.Q4_K_M.gguf</code></li>
                    <li><strong>Coding:</strong> <code>DeepSeek-Coder-V2-Lite-Instruct</code> or <code>Qwen2.5-Coder</code></li>
                    <li><strong>Uncensored/Creative Writing:</strong> <code>Dolphin-Mixtral</code></li>
                    <li><strong>Images:</strong> <code>SDXL 1.0</code> or <code>Flux.1 Schnell</code> (on CivitAI/Hugging Face)</li>
                    <li><strong>Audio Transcription:</strong> <code>Whisper Large V3</code></li>
                </ul>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">🛠️ SECTION 6: Troubleshooting Common Beginner Problems</h2>

                <blockquote class="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-md text-slate-700 my-4">
                    ⚠️ <strong>"The model is typing incredibly slowly!"</strong><br>
                    <strong>Fix:</strong> You downloaded a model that is too big for your PC, or you didn't download a <code>Q4</code> quantized version. Try downloading a smaller model (like a 3B or 7B model) in Q4 format.
                </blockquote>

                <blockquote class="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-md text-slate-700 my-4">
                    ⚠️ <strong>"My computer crashed / Out of Memory (OOM) error!"</strong><br>
                    <strong>Fix:</strong> The AI's brain couldn't fit in your RAM. In LM Studio or GPT4All, go to settings and lower the "Context Window" (how much of the past conversation the AI remembers). Lowering it from 8000 to 2000 saves massive amounts of memory.
                </blockquote>

                <blockquote class="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-md text-slate-700 my-4">
                    ⚠️ <strong>"Where are these massive files hiding on my computer?"</strong><br>
                    If your hard drive is full, you need to clear out old models:<br>
                    • <strong>Ollama (Mac):</strong> <code>~/.ollama/models</code><br>
                    • <strong>Ollama (Windows):</strong> <code>C:\\Users\\YOUR_NAME\\.ollama\\models</code><br>
                    • <strong>LM Studio:</strong> Look inside <code>~/.cache/lm-studio/models</code>
                </blockquote>

                <blockquote class="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-md text-slate-700 my-4">
                    ⚠️ <strong>"My fans aren't spinning, I don't think it's using my Graphics Card!"</strong><br>
                    <strong>Fix:</strong> In LM Studio, look at the right-side panel for "Hardware Settings" and make sure the <strong>GPU Offload</strong> slider is pushed all the way to "Max". In Ollama, GPU offloading happens automatically, but make sure your graphics drivers are up to date!
                </blockquote>

                <hr class="my-8 border-slate-200">

                <h2 class="text-2xl font-bold text-slate-900 mb-4">📚 SECTION 7: The FreeAI Hub Glossary</h2>
                <p class="text-slate-600 mb-4 leading-relaxed">AI has a terrible habit of using complicated words for simple concepts. Here is your plain-English translator:</p>

                <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-8">
                    <li><strong>LLM (Large Language Model):</strong> A text-based AI (like ChatGPT) that has read millions of books and learned to predict the next logical word in a sentence.</li>
                    <li><strong>GGUF:</strong> The standard file format for local AI models. It makes models run well on normal home computers.</li>
                    <li><strong>Quantization:</strong> Compressing an AI model to make it smaller and faster, with almost no loss in smarts. (Usually expressed as Q4, Q5, Q8).</li>
                    <li><strong>Context Window:</strong> The AI's short-term memory. A context window of 8,000 tokens means it can remember about 6,000 words of your current conversation before it forgets the beginning.</li>
                    <li><strong>Tokens:</strong> How AI sees words. A token is usually 3/4ths of a word. ("Hamburger" might be split into "Ham", "bur", "ger" — 3 tokens).</li>
                    <li><strong>Inference:</strong> The actual act of the AI "thinking" and generating a response.</li>
                    <li><strong>Embedding:</strong> Translating text into numbers so an AI can understand the mathematical relationship between concepts (e.g., King - Man + Woman = Queen).</li>
                    <li><strong>Multimodal:</strong> An AI that can see images, hear audio, and read text, rather than just text alone.</li>
                    <li><strong>Fine-tuning:</strong> Taking a general AI (like Llama) and giving it extra training to make it an expert in one specific thing (like coding or medicine).</li>
                    <li><strong>RAG (Retrieval-Augmented Generation):</strong> Giving the AI a search engine or a PDF to read <em>before</em> it answers your question, so it doesn't hallucinate facts.</li>
                    <li><strong>API (Application Programming Interface):</strong> A bridge that allows two software programs to talk to each other.</li>
                    <li><strong>Prompt:</strong> The text/question you type into the AI.</li>
                    <li><strong>System Prompt:</strong> Invisible, underlying instructions given to the AI (e.g., "You are a helpful pirate, always speak in pirate slang").</li>
                    <li><strong>Temperature:</strong> Controls the AI's creativity. 0.1 = Robotic and factual. 0.9 = Highly creative and random.</li>
                    <li><strong>Top-p / Top-k:</strong> Settings next to Temperature that further control how wild or strict the AI's vocabulary choices are.</li>
                    <li><strong>Parameters:</strong> The "neurons" of the AI. A 7B model has 7 Billion parameters. More parameters = smarter, but slower.</li>
                    <li><strong>Checkpoint:</strong> The actual file you download for image generation AI (usually ends in <code>.safetensors</code>).</li>
                    <li><strong>VRAM (Video RAM):</strong> The memory specifically located on your graphics card. Essential for fast AI generation.</li>
                    <li><strong>CPU Offloading:</strong> When your graphics card is full, the system "offloads" the rest of the AI brain onto your slower main computer processor (CPU) so it doesn't crash.</li>
                    <li><strong>Vulkan / CUDA / Metal:</strong> The software languages that allow AI to talk to your graphics card. CUDA = NVIDIA. Metal = Apple Mac. Vulkan = AMD/Intel.</li>
                    <li><strong>Ollama:</strong> A popular, invisible background app that easily runs local AI models.</li>
                    <li><strong>Hugging Face:</strong> The main website where researchers upload AI models for the public to download.</li>
                    <li><strong>CivitAI:</strong> A website specifically dedicated to sharing AI models for generating <em>images</em>.</li>
                    <li><strong>Diffusion Model:</strong> An AI that generates images by starting with TV static (noise) and slowly organizing the static into a picture.</li>
                    <li><strong>VAE (Variational Autoencoder):</strong> The "eyes" of an image AI. It translates the AI's math into the actual colored pixels you see on screen.</li>
                    <li><strong>LoRA (Low-Rank Adaptation):</strong> A tiny, lightweight file (like an add-on or a mod) that you attach to a main AI model to teach it a specific character, art style, or behavior without needing to download a whole new massive model.</li>
                    <li><strong>ComfyUI:</strong> A popular, node-based (connect-the-dots) interface for generating images.</li>
                    <li><strong>AUTOMATIC1111 (A1111):</strong> A popular, traditional webpage-style interface for generating images.</li>
                    <li><strong>Open-Source:</strong> Software where the underlying code is free for anyone to look at, modify, and improve.</li>
                    <li><strong>Hallucination:</strong> When an AI confidently lies or makes up a fake fact because it doesn't know the real answer.</li>
                    <li><strong>Weights:</strong> Another term for the actual data inside the model file; the numerical values it learned during training.</li>
                </ol>

                <div class="bg-indigo-50 border border-indigo-100 rounded-lg p-6 text-center">
                    <h3 class="text-xl font-bold text-slate-900 mb-2">🎉 You did it!</h3>
                    <p class="text-slate-600 mb-4">You now know more about how AI actually works than 99% of the population. Head over to the directory, find a tool that looks cool, and start building your own private AI command center today!</p>
                    <a href="https://wasberry-spaceapps.github.io/FreeAI-Hub/" class="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-indigo-500 transition-colors">Explore FreeAI Hub</a>
                </div>
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
