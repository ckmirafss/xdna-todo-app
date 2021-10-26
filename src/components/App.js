import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const App = () => (
  <>
    <Container maxWidth="md" style={{ marginTop: '20px', minHeight: '60vh' }}>
      <Box boxShadow={1} style={{ textAlign: 'center', padding: '10px', color: '#000' }}>
        <Typography variant="h2" gutterBottom fontWeight="fontWeightBold">
          <b>XDNA Exam -  Todo</b>
          <Box p={1} />
        </Typography>
        <AddTodo />
        <Box p={1} />
        <VisibleTodoList />
        <Footer />
      </Box>
    </Container>

  </>
)

export default App