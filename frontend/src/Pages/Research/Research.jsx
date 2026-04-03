import React from "react";
import "./Research.css";

// Import Icons
import { LuBrain, LuBook, LuNetwork } from "react-icons/lu";
import { TbAtom } from "react-icons/tb";

const researchData = [
    {
        title: "Networking",
        desc: "Our networking research investigates the design, optimization, and security of next-generation distributed network architectures — spanning cloud, fog, and edge computing paradigms that enable intelligent, low-latency processing at scale. We address the convergence of 5G/6G wireless systems with IoT networks, exploring how Software-Defined Networking and network virtualization deliver programmable, adaptive infrastructure. A core focus lies in developing resource allocation frameworks grounded in Game Theory and Matching Theory to achieve efficient, fair, and stable scheduling across distributed hierarchies.",
        tags: ["Edge Computing", "Fog Computing", "IoT Networks", "5G & 6G", "Network Security", "Cloud Computing", "SDN", "Game Theory & Matching Theory", "Network Slicing", "Edge Intelligence"],
        icon: LuNetwork,
        blogs: ["Adaptive Tourism Planning"],
    },
    {
        title: "Artificial Intelligence",
        desc: "Our AI research spans foundational and applied dimensions — from the theoretical underpinnings of Machine Learning and Deep Learning to the emergent capabilities of Large Language Models and Generative AI. We advance state-of-the-art methods in Computer Vision, Natural Language Processing, and Reinforcement Learning to address complex real-world challenges. A strong emphasis is placed on building systems that are not only performant but interpretable through Explainable AI (XAI) frameworks, ensuring next-generation AI systems are robust, trustworthy, and aligned with real-world needs.",
        tags: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Explainable AI", "Computer Vision", "NLP", "Generative AI", "LLMs", "Neural Architecture Design"],
        icon: LuBrain,
        blogs: ["Bridging the trust gap: Leveraging Explainable AI for personalized E-Commerce Recommendations", "Satellite Imaging for Canal Identification Using AI", "SYNCAD: Cross Modal Diffusion Synchronized Yields from Narrative Cross Modal Audio and Data", "Splitting and Parallel Training of Dense Layer in Dueling DQN", "A Dual Byzantine Fault Tolerance approach for Multi-Agent Drone Surveillance with Deep Reinforcement Learning", "Advances in Fraud Detection: Machine Learning and Deep Learning Emerging Technologies in Financial and Online Payment Systems"],
    },
    {
        title: "Indian Knowledge Systems",
        desc: "Our IKS research is dedicated to the computational recovery, formalization, and preservation of India's vast intellectual heritage. We apply state-of-the-art methods in NLP, automatic speech recognition, and deep learning to digitize heritage manuscripts, develop low-resource ASR pipelines for regional Indian languages, and build computational models of Indian classical and Bollywood musicology grounded in raga theory and rhythmic structure. Drawing on foundational contributions from ancient Indian mathematics and formal systems, this domain bridges traditional epistemological frameworks with modern AI for scalable cultural preservation.",
        tags: ["Heritage Manuscript Digitization", "Regional Language ASR", "Computational Musicology", "Raga Recognition", "Sanskrit & Classical NLP", "Ancient Indian Mathematics", "AI for Cultural Preservation"],
        icon: LuBook,
        blogs: ["Harmonies of History: A Deep Dive into Bollywood Music", "Detect Misinformation in Religious Texts Using AI"],
    },
    {
        title: "Emerging Technologies",
        desc: "This domain investigates foundational and disruptive technologies poised to redefine the boundaries of computation, security, and intelligent systems. Our work spans semiconductor innovation — including advanced chip architectures and materials beyond silicon — to decentralized trust mechanisms enabled by blockchain protocols, and the autonomous reasoning capabilities of Agentic AI systems that plan and adapt with minimal human intervention. We further explore quantum computing's potential to solve classically intractable problems across cryptography, optimization, and simulation, while maintaining a forward watch on emergent frontiers such as neuromorphic engineering and bio-integrated systems.",
        tags: ["Semiconductors", "Blockchain & Decentralized Protocols", "Agentic AI", "Quantum Computing", "Neuromorphic Computing"],
        icon: TbAtom,
        blogs: [],
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

                                {item.blogs && item.blogs.length > 0 && (
                                    <div className="related-blogs">
                                        <h3 className="related-blogs-title">Related Work from Our Lab</h3>
                                        <ul className="related-blogs-list">
                                            {item.blogs.map((blog, i) => (
                                                <li key={i}>{blog}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Research;