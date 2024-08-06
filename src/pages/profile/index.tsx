import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, Grid, Link, Paper, Typography } from '@mui/material';
import router from 'next/router';
import React, { useEffect, useState } from 'react';


const ProfilePage: React.FC = () => {
  const userLogged = useAuth();
  useEffect(() => {
    if (!userLogged.user) {
      router.push('/login');
    }
  }, [userLogged.user, router]);


  // const [user, setUser] = useState<User>();
  // useEffect(() => {
  //   // Fetch user data from API
  //   fetch('/api/hello')
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  //     .catch(error => console.error('Error fetching user data:', error));
  // }, []);
  return (
    <Layout
      layoutHeaderStyle={{
        marginTop: "calc(var(--navbar-height) + var(--container-margin))"
      }}

    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Avatar src={userLogged.user?.imagem} alt={userLogged.user?.nome} sx={{ width: 100, height: 100, marginBottom: 10 }} />
            <Typography variant="h4" gutterBottom>{userLogged.user?.nome}</Typography>
            <Typography variant="body1" gutterBottom><strong>Tipo do Usuário:</strong> {userLogged.user?.tipousuario}</Typography>
            <Typography variant="body1" gutterBottom><strong>Email:</strong> {userLogged.user?.email}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProfilePage;
