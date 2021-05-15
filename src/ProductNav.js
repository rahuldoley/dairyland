import React from 'react';
import './ProductNav.css';
import { Link } from 'react-router-dom';

function ProductNav() {
    return (
        <div className="header">
            <div className="menu-btn">
                <div className="menu-icon">
                    <div>
                        <Link class="link link-theme link-arrow">Milk</Link>
                        <Link class="link link-theme link-arrow">Ghee</Link>
                        <Link class="link link-theme link-arrow">Paneer</Link>
                        <Link class="link link-theme link-arrow">Butter</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductNav
 