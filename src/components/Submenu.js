/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../context/context';

const Submenu = () => {
    const [colums, setColums] = useState();
    const { isSubmenuOpen, subPage, usbmenuLocation } = useContext(AppContext);
    const container = useRef(null);

    const { page, links } = subPage;

    useEffect(() => {
        setColums('col-2');

        const { center } = usbmenuLocation;
        const submenu = container.current;
        submenu.style.left = `${center}px`;

        if (links.length === 3) {
            setColums('col-3');
        }
        if (links.length > 3) {
            setColums('col-4');
        }
    }, [links, usbmenuLocation]);

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${colums}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link;
                        return (
                            <a href={url} key={index}>
                                {icon} {label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
};

export default Submenu;
