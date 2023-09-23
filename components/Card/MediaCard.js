import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ title, paragraph, imageSrc, link }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageSrc} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {paragraph}
        </Typography>
      </CardContent>
      <CardActions>
        {link && (
          <Button
            size="small"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
