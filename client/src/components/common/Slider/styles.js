import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainSlider: {
    width: "500px",
    height: "390px",
    display: "flex",
    flexDirection: "row-reverse",
    textAlign: "center",

    "& .carousel": {
      width: "170px",

    },

    "& .thumb": {
      opacity: 0.5,
    },

    "& .thumbs": {
      padding: "0px",
      display: "flex",
      flexDirection: "column ",

      alignAtems: "center",
    },

    "& .thumb.selected": {
      border: "none",
      opacity: 1,
    },

    "& .thumbs-wrapper ": {
      margin: "0px 10px",
    },

    "& .control-dots, .control-arrow, .carousel-status, .control-next": {
      display: "none",
    },
  },

  [theme.breakpoints.down('sm')]:{
    mainSlider: {
      width: "350px",
      height: "500px",
      flexDirection: "column",
  
      "& .carousel": {
        width: "300px",
      },

      "& .thumbs": {
        flexDirection: "row",
      },
    },
  },
  
  [theme.breakpoints.down('xs')]:{
    mainSlider: {
      margin: '0 auto',
      width: "320px",
      height: "450px",
      flexDirection: "column",
  
      "& .carousel": {
        width: "300px",
      },

      "& .thumbs": {
        flexDirection: "row",
      },
    },
  },
  
  

}));
export default useStyles;