import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { BlogMap } from 'components/BlogMap';

const MAX_CONTENT_LENGTH = 240;

const BLOG_POSTS = [
  {
    title: 'Post #1',
    date: new Date('2023-12-17T03:24:00'),
    key: 'abc',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris id massa aliquam feugiat scelerisque ac leo. Donec sollicitudin ultrices lorem eu pulvinar. Proin fermentum vulputate nisl sed sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis quam varius, ultricies augue venenatis, maximus nunc. Nullam cursus felis dolor, eget fermentum magna lacinia ut. Nam faucibus mi sed justo vehicula fringilla. Aenean dictum ullamcorper nulla sed vestibulum. Suspendisse potenti. Aenean nisl risus, vulputate ut nulla eu, rutrum ultricies justo. Nulla et ultrices mauris. Pellentesque nec lacus congue, viverra tortor eu, tempor est. Phasellus tempor suscipit justo, sit amet pretium velit posuere ut. Suspendisse potenti. Cras auctor quam urna, eget tristique elit maximus non.',
  },
  {
    title: 'Post #2',
    date: new Date('2024-01-01T13:24:00'),
    key: 'def',
    content: 'Maecenas neque justo, imperdiet sit amet turpis quis, eleifend pharetra sapien. Integer vestibulum ipsum in nulla pellentesque, ac elementum nunc pulvinar. Curabitur rhoncus consectetur metus. Ut suscipit elit quis diam dapibus varius. Curabitur varius magna ligula, fermentum hendrerit magna accumsan ac. Nulla lacinia magna metus, in suscipit magna placerat eu. Curabitur luctus semper purus id tempus. Etiam bibendum est eu dolor fermentum, eu pretium lectus porta. Nam lorem lectus, tincidunt sed dignissim non, malesuada ac odio. Curabitur fermentum lectus libero, ac scelerisque eros sodales nec. Pellentesque eget nisi ultrices mauris tristique tincidunt sed blandit diam. ',
  },
  {
    title: 'Post #3',
    date: new Date('2024-03-01T13:24:00'),
    key: 'pqr',
    content: 'Heyo, this is another post',
  },
]

const PreviewItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const BlogPreview = ({ post }) => {

  return (
    <PreviewItem>
      <Typography variant={'h4'}>{post.title}</Typography>
      <Typography variant={'body1'}>{post?.content?.slice(0, MAX_CONTENT_LENGTH)}{post?.content?.length > MAX_CONTENT_LENGTH ? '...' : ''}</Typography>
    </PreviewItem>
  );
}

export const Blog = (props) => {

  return (
    <Container maxWidth={'lg'}>
      <div style={{ height: '1rem' }} />
      <Grid container spacing={2}>
        {BLOG_POSTS.map((post) => (
          <Grid item xs={12}>
            <BlogPreview key={post.key} post={post} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper>
          <BlogMap />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
