import React from "react";
import {
    Grid,
    Typography,
    Link,
    TextField,
    Button,
    Box
} from "@material-ui/core";
import Logo from "../common/Logo/Logo";
import { useStyles } from './styles';
import { footerLinks } from './consts';
import Vector from '../icons/vector.svg';

const Footer = () => {
    const classes = useStyles();
    const clickOnButtonEmailInput = () => {

    }
    return (
        <>
            <Grid
                container
                spacing={2}
                className={classes.footerFirst}
                style={{ margin: 0, width: '100%' }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Logo />
                    <Box style={{ marginTop: "30px" }}>
                        {footerLinks.info.map((link, index) => (
                            <Link href="/" className={classes.footerLink} key={index}>
                                {/* TODO */}
                                {link}
                            </Link>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Link href="/" className={classes.footerTitle}>
                        {/* TODO */}
                        Категории
                    </Link>
                    {footerLinks.kategory.map((el, index) => (
                        <Link href="/" className={classes.footerLink} key={index}>
                            {/* TODO */}
                            {el}
                        </Link>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Связаться с нами
                    </Typography>
                    {footerLinks.contacts.map((contactPhone, index) => (
                        <Link href="/" className={classes.footerLink} key={index}>
                            {contactPhone}
                        </Link>
                    ))}
                    {footerLinks.timeToCall.map((link, index) => (
                        <Typography className={classes.footerLink} key={index}>
                            {link}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Будьте всегда в курсе наших новостей!
                    </Typography>
                    <Box style={{ position: 'relative' }}>
                        <TextField
                            className={classes.multilineColor}
                            InputProps={{
                                className: classes.multilineColor
                            }}
                            fullWidth
                            placeholder="email"
                            variant="outlined"
                            id={'seachFooter'}
                        />
                        <Button color="inherit" className={classes.footerEmailInputButton} onClick={clickOnButtonEmailInput} id={'buttonSeachFooter'}>
                            <img src={Vector} alt="vector" />
                        </Button>
                    </Box>
                    <Typography
                        className={classes.footerTitle}
                        style={{ margin: "30px 0 22px" }}
                        id={'socialNetworks'}
                    >
                        Мы в соц. сетях:
                    </Typography>
                    <Link href="https://www.instagram.com/" target="_blank" className={classes.linkWrapper} id={'instagramIcon'}>
                        {/* TODO */}
                        <img src="./images/footer/instagram.png" alt="instagram" />
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" className={classes.linkWrapper} id={'facebookIcon'}>
                        {/* TODO */}
                        <img src="./images/footer/logo-facebook.svg" alt="facebook" />
                    </Link>
                    <Link href="https://www.google.com/" target="_blank" className={classes.linkWrapper} id={'googleIcon'}>
                        {/* TODO */}
                        <img src="./images/footer/logo-google.svg" alt="google" />
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" className={classes.linkWrapper} id={'linkedinIcon'}>
                        {/* TODO */}
                        <img src="./images/footer/linkedin-icon.svg" alt="linkedin" />
                    </Link>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className={classes.footer}
            >
                <Typography className={classes.text}>
                    © Интернет-магазин TechMart
                </Typography>
                <Grid item className={classes.container}>
                    <Link href="/" className={classes.linkWrapper}>
                        {/* TODO */}
                        <img
                            src="./images/footer/visa.png"
                            alt="visa"
                            style={{ marginBottom: "7px" }}
                        />
                    </Link>
                    <Link href="/" className={classes.linkWrapper}>
                        {/* TODO */}
                        <img src="./images/footer/master-card.png" alt="master-card" />
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
