/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from '../context/context';
import linksData from '../data/data';

const Sidebar = () => {
    const { sidebarToggle, isSidebarOpen } = useContext(AppContext);
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className="sidebar">
                <button type="button" className="close-btn" onClick={sidebarToggle}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {linksData.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link, ind) => {
                                        const { url, icon, label } = link;
                                        return (
                                            <a href={url} key={ind}>
                                                {icon} {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
