import React, { Component,Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

class Analysis extends Component {

constructor(){
super();
this.state={

  data:[
    {
      name: 'JS',
      Number:100,

      SKILL: 60,
   
    },
    {
      name: 'MongDb',
   

      SKILL: 30,
  
    },
    {
      name: 'Html',
      SKILL: 90,
    },
   
    {
      name:'Bootstrap',
     

      SKILL: 75,
  
    },

    {
      name: 'React.js',
     

      SKILL: 75,
  
    },
     {
      name: 'Node.js',
     

    SKILL: 50,
  
    },
  
 
  ]
}


}



 render() {
  return (
   <Fragment>
   <Container className="analysisTextSection">
     <h1 className="AllSectionTittle text-center " >Technology We Used</h1> 
<Row >



<Col lg={6} md={12} sm={12} className="analysisChart" >
  <ResponsiveContainer width="100%" height="100%"  >
    <BarChart
          width={700}
          height={400}
          data={this.state.data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="name" />
          <YAxis dataKey="Number" />
          <Tooltip/>
          <Legend />
          <Bar dataKey="SKILL" barSize={50} fill="#007bbd" />
        </BarChart>
        </ResponsiveContainer>

</Col>




<Col lg={6} md={12} sm={12}>

<p className=" text-justify text-dark analysisText">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis, deserunt laudantium consequuntur, saepe voluptatibus odio odit dolore aliquid esse nam rem quam unde error provident asperiores repudiandae nobis magnam.
<br></br>
<br></br>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta, laudantium minima qui, omnis quod, adipisci ea quasi nemo veritatis in iusto sequi ratione? Accusantium veniam cum numquam maiores odit!
<br></br>
<br></br>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores porro laboriosam est. Ipsum, enim suscipit? Ad aliquam esse dolorum maxime voluptas, qui officia omnis modi necessitatibus sit nulla consequatur.
<br></br>
<br></br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio exercitationem nihil autem sapiente reiciendis pariatur rerum unde quo maxime iste officiis veritatis nam, perferendis quod, minima, vel amet dolorem!
Lorem ipsum dolor sit amet consectetur adipisicing elit
</p>
</Col>




</Row>

   </Container>
  </Fragment>
  );
 }
}

export default Analysis;