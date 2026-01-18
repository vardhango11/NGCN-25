import React from "react";
import "./Research.css";

// Import Icons
import { LuBrain, LuBook, LuNetwork } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { TbAtom } from "react-icons/tb";
import { CiCloud, CiWifiOn } from "react-icons/ci";
import { GoBold } from "react-icons/go"; // Using generic bold for NLP if specific icon not found, or swap for LuFileText

const researchData = [
    {
        title: "Machine Learning",
        desc: "Advanced algorithms for pattern recognition, predictive modeling, and intelligent decision-making systems.",
        tags: ["Neural Networks", "Ensemble Methods", "Feature Engineering", "Model Optimization"],
        icon: LuBrain,
    },
    {
        title: "Deep Learning",
        desc: "Deep neural network architectures for complex problem solving and cognitive computing applications.",
        tags: ["CNNs", "RNNs", "Transformers", "GANs", "Computer Vision", "NLP"],
        icon: FiCpu,
    },
    {
        title: "IoT & Edge Computing",
        desc: "Distributed computing at the network edge, enabling real-time processing and reduced latency.",
        tags: ["Edge AI", "Fog Computing", "Smart Sensors", "Industrial IoT"],
        icon: LuNetwork,
    },
    {
        title: "Networking Security",
        desc: "Protecting data, networks, and systems through cutting-edge security techniques and frameworks.",
        tags: ["Network Security", "5G/4G", "Network Architecture"],
        icon: CiWifiOn,
    },
    {
        title: "Cloud Computing",
        desc: "Optimizing cloud infrastructure for scalable and efficient computing resources.",
        tags: ["IaaS", "PaaS", "SaaS", "Cloud Networking"],
        icon: CiCloud,
    },
    {
        title: "Indian Knowledge Systems",
        desc: "Integration of traditional Indian knowledge, philosophy, and mathematics into modern research.",
        tags: ["ASR Regional", "Music Systems", "Ancient Math"],
        icon: LuBook,
    },
    {
        title: "Quantum Computing",
        desc: "Leveraging supercomputing and parallel architectures for data-intensive scientific applications.",
        tags: ["MPI", "OpenMP", "GPU Acceleration"],
        icon: TbAtom,
    },
    {
        title: "Game Theory",
        desc: "Analyzing strategic decision-making and designing stable, optimal matching systems.",
        tags: ["Game Theory", "Matching Theory", "Optimization"],
        icon: LuNetwork,
    },
    {
        title: "Natural Language Processing",
        desc: "Advancing techniques for understanding and generating human language.",
        tags: ["NER", "Sentiment Analysis", "LLMs"],
        icon: GoBold,
    },
];

const Research = () => {
    return (
        <div className="research-page-wrapper">
            {/* Hero Section */}
            <div className="research-hero">
                <div className="hero-content">
                    <h1>Research & Innovation</h1>
                    <p>
                        From Edge AI to Quantum Networking, we are pioneering novel architectures
                        and algorithms that redefine the capabilities of intelligent systems.
                    </p>
                </div>
            </div>

            {/* Grid Section */}
            <div className="research-container">
                <div className="research-grid">
                    {researchData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className="research-card">
                                <div className="card-top">
                                    <div className="icon-box">
                                        <IconComponent className="card-icon" />
                                    </div>
                                    <h2>{item.title}</h2>
                                </div>

                                <p className="card-desc">{item.desc}</p>

                                <div className="tags-container">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Research;