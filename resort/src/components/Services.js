import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "buông bàn tay rời ra lạnh thing bước đi "
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "buông bàn tay rời ra lạnh thing bước đi "
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: "buông bàn tay rời ra lạnh thing bước đi "
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "buông bàn tay rời ra lạnh thing bước đi "
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
