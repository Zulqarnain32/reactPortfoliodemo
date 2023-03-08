import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../Context";
import { AppContext } from "../Context";
// const HeroSection = (props) => {
const HeroSection = (props) => {
// const HeroSection = ({name,image}) => {
  //ager istrah sy likhta hoon tu  mughy only name and image likhna pry ga props.name nahi
  // const { name, image } = useGlobalContext();
  //this is useContext hook
  // const {fname,lname} = useGlobalContext();
  const {name,image} = useGlobalContext();
  
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            from samll bussiness sites to rich interactive web apps.
            i am a web developer from Pakistan, Zulqarnain Chohan and currently living in Shahdara Lahore. I enjpy building everything
            If you are a bussiness seeking a web presence or an employee looking to hire, you can get in touch with me here
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
            {/* <img src={props.image} alt="hero image" className="hero-img " /> */}
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;