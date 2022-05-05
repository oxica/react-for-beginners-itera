import s from './Footer.module.css';

type FooterProps = {
  copyright: string;
};

export const Footer: React.FC<FooterProps> = (props) => (
  <footer className={s.footer}>Footer {props.copyright}</footer>
);
