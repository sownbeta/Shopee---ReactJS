import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa"; 

const cx = classNames.bind(styles);

const NavLinks = ({ links }) => (
  <>
    {links.map((link, index) => (
      <React.Fragment key={index}>
        <Link to={link.path} className={cx("nav-link")}>
          {link.label}
        </Link>
        {index < links.length - 1 && (
          <span className={cx("separator")}> | </span>
        )}
      </React.Fragment>
    ))}
  </>
);

const Header = () => {
  // Liên kết cho thanh điều hướng trên cùng
  const topLinks = [
    { label: "Kênh Nguồn Bán", path: "/seller-channel" },
    { label: "Trở Thành Nguồn Bán Shopee", path: "/become-seller" },
    { label: "Tải Ứng Dụng Shopee", path: "/download-app" },
    { label: "Kết Nối", path: "/connect" },
  ];

  const topRightLinks = [
    { label: "Thông Báo", path: "/notifications" },
    { label: "Hỗ Trợ", path: "/support" },
    { label: "Tiếng Việt", path: "/language" },
    { label: "Đăng Ký", path: "/register" },
    { label: "Đăng Nhập", path: "/login" },
  ];

  // Liên kết cho thanh gợi ý bên dưới
  const bottomLinks = [
    { label: "Quạt Cầm Tay", path: "/category/fan" },
    { label: "Quần Hot 2025", path: "/category/clothes" },
    { label: "Áo Phông Đẹp", path: "/category/shirts" },
    { label: "Giày Quai Hậu Nữ Đế", path: "/category/shoes" },
    { label: "iPhone 15 Pro Max 256GB 1k", path: "/product/iphone-15" },
    { label: "Bánh Mì Xốp Địa Trung", path: "/product/bread" },
  ];

  return (
    <header className={cx("header-container")}>
      {/* Thanh điều hướng trên cùng */}
      <div className={cx("top-bar")}>
        <div className={cx("top-bar-content")}>
          <NavLinks links={topLinks} />
          <div className={cx("social-icons")}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <NavLinks links={topRightLinks} />
        </div>
      </div>

      <div className={cx("main-header")}>
        <Link to="/" className={cx("logo")}>
          <span className={cx("logo-icon")}>S</span> Shopee
        </Link>
        <div className={cx("search-bar")}>
          <input
            type="text"
            placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
            className={cx("search-input")}
          />
          <button className={cx("search-button")}>
            <FaSearch />
          </button>
        </div>
        <Link to="/cart" className={cx("cart-icon")}>
          <FaShoppingCart />
        </Link>
      </div>

      <div className={cx("bottom-bar")}>
        <NavLinks links={bottomLinks} />
      </div>
    </header>
  );
};

export default Header;
