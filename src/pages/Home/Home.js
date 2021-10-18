import React from "react";
import "./Home.css";
import IngredientsCards from "components/IngredientsCards/IngredientsCards";
import Wrapper from "HOC/Wrapper/Wrapper";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";
import CookingProcessCard from "components/CookingProcessCard/CookingProcessCard";
import Accordion from "components/Accordion/Accordion";
import { Link } from "react-router-dom";
import cusineIcon from "assets/images/cusine-icon.png";
import CircleCard from "components/CircleCard/CircleCard";
import indiaFlag from "assets/images/india-flag.png";
import italyFlag from "assets/images/italy-flag.png";
import categoryIcon from "assets/images/category-icon.png";
import courseIcon from "assets/images/course-icon.png";
import beaf from "assets/images/beaf.png";
import clock from "assets/images/clock.png";
import fire from "assets/images/fire.png";
import cookBook from "assets/images/cook-book.png";
import cookerHat from "assets/images/cooker-hat.png";
import biryani from "assets/images/biryani.png";
import dish from "assets/images/dish.png";
import dish2 from "assets/images/dish-2.png";
import TitleBar from "components/TitleBar/TitleBar";
import OverViewCard from "components/OverViewCard/OverViewCard";
import RecipeCard from "components/RecipeCard/RecipeCard";
import MixtureCard from "components/MixtureCard/MixtureCard";

function Home() {
  return (
    <Wrapper
      bodyStyles={{
        padding: "15px 1.875rem",
        marginTop: "72px",
        paddingLeft: "170px",
      }}
    >
      {/* section 1 */}
      <div className="food-items-wrapper mb-80">
        <div className="food-items-left">
          <p className="light-black fs-48px weight-7 mb-20">Chicken Biriyani</p>
          <p className="light-black fs-18px weight-4 mb-15 ln-28px">
            Biryani is an intricate rice dish made with layers of curried meat
            and rice. Given its use of <br /> adornments and luxurious finishes,
            it's no surprise that biryani has roots in Persian <br /> cuisine.{" "}
            <Link to="/" className="read-more-btn">
              Read more
            </Link>
          </p>

          <div className="food-item-cards">
            <div className="food-item-card">
              <div className="mb-20">
                <TitleBar
                  img={<img src={cusineIcon} alt="" />}
                  title="Cusine"
                />

                <div className="row gap-10px ">
                  <CircleCard
                    content={<img src={indiaFlag} alt="" />}
                    title="Indian"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(255, 152, 17, 0.1) 0%, rgba(109, 165, 68, 0.1) 100%)",
                    }}
                  />
                  <CircleCard
                    content={<img src={italyFlag} alt="" />}
                    title="Italian"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(255, 152, 17, 0.1) 0%, rgba(109, 165, 68, 0.1) 100%)",
                    }}
                  />
                </div>
              </div>
              {/*  */}

              <div className="mb-10">
                <TitleBar
                  img={<img src={categoryIcon} alt="" />}
                  title="Category"
                />

                <div className="row gap-10px ">
                  <CircleCard
                    content={<p className="fs-16px">Dinner</p>}
                    style={{ border: "1.5px solid #C2C9EE" }}
                  />
                  <CircleCard
                    content={<p className="fs-16px">Lunch</p>}
                    style={{ border: "1.5px solid #E9B699" }}
                  />
                </div>
              </div>

              {/*  */}
              <div className="mb-10">
                <TitleBar
                  img={<img src={courseIcon} alt="" />}
                  title="Course"
                />

                <div className="row gap-10px mb-10">
                  <CircleCard
                    content={<img src={beaf} alt="" />}
                    title="Main"
                    style={{ border: "1.5px solid #E9B699" }}
                  />
                </div>
              </div>
            </div>
            <div className="food-item-card">
              <TitleBar title="Overview" />
              <div className="overview-cards mb-40">
                <OverViewCard
                  img={clock}
                  title="Total Time"
                  subtitle="20 Minites"
                />
                <OverViewCard
                  img={fire}
                  title="Total Time"
                  subtitle="20 Minites"
                />
              </div>

              {/*  */}

              <TitleBar
                img={<img src={cookBook} alt="" />}
                title="Recipe Link"
              />

              <RecipeCard img={cookerHat} title="Restaurant" />
            </div>
          </div>
        </div>
        <div className="food-items-right">
          <img src={biryani} style={{ width: "250px" }} alt="" />

          <MixtureCard mixtureItems={[dish, dish2]} />
        </div>
      </div>

      {/* section 2 */}
      <div className="mb-80">
        <p className="light-black fs-35px weight-7 mb-15">Ingredients</p>
        <IngredientsCards />
        <IngredientsCards />
        <IngredientsCards />
      </div>

      {/* section 3 */}
      <div className="mb-80">
        <p className="light-black fs-35px weight-7 ">Cooking Process</p>

        <div className="cooking-process-wrapper">
          <div className="cooking-process-header">
            <p className="fs-25px weight-5 light-black">Marinate</p>

            <div className="cooking-process-btn">
              <div>1/3</div>
              Next Step
              <ArrowRight />
            </div>
          </div>

          <div className="cooking-process-body">
            {new Array(3).fill("").map((cardData, index) => (
              <CookingProcessCard key={index} order={index} />
            ))}
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="mb-80">
        <p className="black fs-35px weight-7 mb-15">FAQ</p>

        <div className="faq-accordions">
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
