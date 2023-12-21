import React from 'react';
import './colors-of-siberian-huskies.jpg'
import './stuff.png'
import './welcome page background.png'
import {
  Container,
  Typography,
  Avatar,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
  Paper,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Pinterest,
  LinkedIn,
  YouTube,
} from '@mui/icons-material';

import './profile.css';

const Profile = () => {
  return (
    <Container className="back-cover" maxWidth="xl">
      <Container className="profile-box">
        <div className="top-box">
          <div className="top-cover">
            <Grid container spacing={0}>
              <Grid item lg={3} className="img-b">
                <Avatar
                  alt="Profile Picture"
                  src="colors-of-siberian-huskies.jpg"
                  sx={{ width: 150, height: 150 }}
                />
              </Grid>
              <Grid item lg={9} className="title-det">
                <Typography variant="h2">
                  Thadeus Cruz Govindapillai / Frontend Developer
                </Typography>
                <Typography>
                  I'm pursuing a Bachelor's Degree in Artificial Intelligence
                  and Data Science at Sri Krishna College of Technology. Planning
                  to complete a Postgraduate Degree in Big Data.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="tab-content">
          <div className="row no-margin home-det">
            <div className="col-lg-4 i-img">
              <h4 className="l-title">Hobbies</h4>
              <ul className="hobby row no-margin">
                <li>
                  <i className="fas fa-book-open"></i> <br /> Reading
                </li>
                <li>
                  <i className="fas fa-bicycle"></i> <br /> Cycling
                </li>
                <li>
                  <i className="fas fa-futbol"></i> <br /> Football
                </li>
                <li>
                  <i className="fas fa-film"></i>
                  <br /> Movies
                </li>
                <li>
                  <i className="fas fa-plane-departure"></i> <br /> Travel
                </li>
                <li>
                  <i className="fas fa-gamepad"></i> <br /> Games
                </li>
              </ul>
              <h4 className="l-title">Education</h4>

              <div className="edu-cov">
                <p>
                  <b>College:</b> Sri Krishna College of Technology
                </p>
                <p>Email: 22ads.thadeuscruzgovindapillai@skct.edu.in</p>
              </div>
              <div className="edu-cov">
                <p>
                  <b>Contact:</b> +91 9344392757
                </p>
              </div>
            </div>
            <div className="col-lg-8 home-det1">
              <h2 className="r-title"> Skills</h2>
              <div className="profess-cover row no-margin">
                <div className="col-lg-6">
                  <div className="prog-row row">
                    <div className="col-lg-6">Photoshop</div>
                    <div className="col-lg-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '35%' }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row prog-row">
                    <div className="col-lg-6">Java</div>
                    <div className="col-lg-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '65%' }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row prog-row">
                    <div className="col-lg-6">Web Design</div>
                    <div className="col-lg-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '75%' }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row prog-row">
                    <div className="col-lg-6">Web Development</div>
                    <div className="col-lg-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '55%' }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="links">
                <div className="row ">
                  <div className="col-lg-12 ">
                    <ul className="social-link">
                      <li>
                        <Link
                          href="https://www.facebook.com/skctofficial/"
                          target="_blank"
                        >
                          <Facebook />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/search?q=%23skct"
                          target="_blank"
                        >
                          <Twitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <Pinterest />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://in.linkedin.com/school/sri-krishna-college-of-technology/"
                          target="_blank"
                        >
                          <LinkedIn />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/channel/UCLtRq0iFEf2BQ2-VECJBUbA"
                          target="_blank"
                        >
                          <YouTube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row no-margin">
                <div className="col-lg-6 no-padding">
                  <TableContainer component={Paper}>
                    <Table className="addrss-list">
                      <TableBody>
                        <TableRow>
                          <TableCell>Position</TableCell>
                          <TableCell>Student</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Nationality</TableCell>
                          <TableCell>Indian</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Date of birth</TableCell>
                          <TableCell>02-03-2004</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <div className="col-lg-6 no-padding">
                  <TableContainer component={Paper}>
                    <Table className="addrss-list">
                      <TableBody>
                        <TableRow>
                          <TableCell>Experience</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Website</TableCell>
                          <TableCell>https://skct.edu.in</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Languages</TableCell>
                          <TableCell>English, Tamil, Spanish</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Profile;
