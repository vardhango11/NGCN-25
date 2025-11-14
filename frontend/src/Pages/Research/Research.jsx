import './Research.css'
import { LuBrain, LuBook } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { LuNetwork } from "react-icons/lu";
import { TbAtom } from "react-icons/tb";
import { CiCloud } from "react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { GoBold } from "react-icons/go";



// function Research(){
//     return(
//         <div>
//         </div>

//     )
// }

import React from "react";
import "./Research.css";

const researchData = [
    {
        title: "Machine Learning",
        desc: "Advanced algorithms for pattern recognition, predictive modeling, and intelligent decision-making systems.",
        tags: ["Neural Networks", "Ensemble Methods", "Feature Engineering", "Model Optimization"],
        iconType: "reactIcon",
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <LuBrain
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Deep Learning",
        desc: "Deep neural network architectures for complex problem solving and cognitive computing applications.",
        tags: ["CNNs", "RNNs", "Transformers", "GANs", "Computer Vision", "NLP",],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <FiCpu
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "IoT & Edge Computing",
        desc: "Distributed computing at the network edge, enabling real-time processing and reduced latency.",
        tags: ["Edge AI", "Fog Computing", "Smart Sensors", "Industrial IoT"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <LuNetwork
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Networking",
        desc: "Protecting data, networks, and systems through cutting-edge security techniques and frameworks.",
        tags: ["Network Security", "5G/4G", "Network Artitecture"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CiWifiOn
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Cloud Computing (CC)",
        desc: "Optimizing cloud infrastructure for scalable and efficient computing.",
        tags: ["IaaS", "PaaS", "SaaS", "Cloud Networking"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CiCloud
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Indian Knowledge Systems",
        desc: "Study and integration of traditional Indian knowledge, including philosophy, mathematics, linguistics, medicine, and astronomy, into modern research and technology.",
        tags: ["ASR for Regional Languages", "Advanced Music Systems", "Ancient Mathematics"],
        iconType: "reactIcon",
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <LuBook
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Quantum Computing",
        desc: "Leveraging supercomputing and parallel architectures for data-intensive scientific applications.",
        tags: ["MPI", "OpenMP", "GPU Acceleration"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <TbAtom
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Game Theory & Matching Theory",
        desc: "Analyzing strategic decision-making and designing stable, optimal matching systems using mathematical and algorithmic techniques.",
        tags: ["Game Theory", "Matching Theory", "Optimization"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <LuNetwork
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
    {
        title: "Cellular Networks",
        desc: "Researching next-generation cellular technologies to improve speed, latency, and large-scale connectivity.",
        tags: ["4G", "5G", "6G", "Wireless Systems"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CiWifiOn
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },


    {
        title: "Natural Language Processing (NLP)",
        desc: "Advancing techniques for understanding and generating human language.",
        tags: ["Named Entity Recognition (NER)", "Sentiment Analysis", "Language Modeling"],
        icon:
            <div className='icon-box'
                style={{
                    backgroundColor: "#f3662eff",
                    height: "60px",
                    width: "60px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <GoBold
                    className='card-icon'
                    style={{
                        fontSize: "35px",
                        color: "white"
                    }}
                />
            </div>,
    },
];

const Research = () => {
    return (
        <div className='research-section'>
            <div className="title">
                <div>
                    <h1>Research Excellence</h1>
                </div>
                <div>
                    <center>
                        <p>
                            Pushing the boundaries of computing and networking through innovative research in emerging technologies
                        </p>
                    </center>
                </div>
            </div>
            <div className="research-container">
                {/* <header className="research-header">
                    <h1>Our Research Areas</h1>
                    <p>
                        Exploring cutting-edge technologies that shape the future of computing and networking.
                    </p>
                </header> */}

                <div className="research-grid">
                    {researchData.map((item, index) => (
                        <div key={index} className="research-card">
                            <div className="icon-wrapper">
                                {
                                    item.icon
                                }
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className="tags">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;



// export default Research;