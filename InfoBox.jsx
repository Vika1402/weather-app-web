import Card from "@mui/material/Card";
import "./InfoBox.css"
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function InfoBox({info}) {
  const initialImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVy_aqgSKoENONnQsrm6m1iwd-tlJXuhsVg&usqp=CAU";


  const Hot="https://assets.terrapass.com/wp-content/uploads/2022/10/massive-heat-waves-of-2022-image-of-sun-in-sky-over-city.jpg";
  const cold="https://hips.hearstapps.com/hmg-prod/images/cold-quotes-1575930075.jpg";
  const Rainy="https://dgiqb6oe6guf5.cloudfront.net/wp-content/uploads/2023/01/rain-allergies-1280x853.jpg";

  return (
    <div className="InfoBox">
    <br />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity> 80 ?Rainy:info.temp>15?Hot:cold}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>
              <h3>{info.weather}</h3>
            </p>
            <p> humidity  = {info.humidity }</p>
            <p>tempreture = {info.temp}&deg;C</p>
            <p>Max Tempreture = {info.temp_max}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
