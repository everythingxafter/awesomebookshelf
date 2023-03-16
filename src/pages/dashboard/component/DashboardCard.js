import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import "./DasboardCard.css";
import { MdDeleteForever } from "react-icons/md";

export default function DashboardCard({
  title,
  pageView,
  publishAt,
  updateAt,
  genre,
  url,
  onUpdate,
  onDelete,
}) {
  const genres = genre.split(",");
  const date = (date) => {
      const theDate = new Date(date).toString().split(" ")

      return `${theDate[2]} ${theDate[1]} ${theDate[3]}`
    }
    
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__container-card">
        <div style={{ margin: "1em" }}>
          <Image src={url} alt={url} className="dashboard-card__image" />
        </div>
        <div className="dashboard-card__body">
          <Container>
            <h3>{title}</h3>
            <div className="dashboard-card__likes">
              <p>Likes</p>
              <p>{pageView}</p>
            </div>

            <div className="dashboard-card__date">
              <div>
                <p>Published at</p>
                <p> {date(publishAt)}</p>
              </div>
              <div>
                <p>Last Update at</p>
                <p> {date(updateAt)}</p>
              </div>
            </div>
            <div className="dashboard-card__button-action">
              <div className="dashboard-card__tags">
                {genres?.map((value) => {
                  return <Button>{value}</Button>;
                })}
              </div>
              <div className="dashboard-card__action">
                <Button variant="success" onClick={onUpdate}>
                  Update
                </Button>
                <Button variant="danger" onClick={onDelete}>
                  <MdDeleteForever size={"1.5em"} />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
