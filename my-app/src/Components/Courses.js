import Card from 'react-bootstrap/Card';

function Courses() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center py-6 text-grey-600 home_comp background-position: center">
       Our Courses
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-[#b7d6e3]">
      
      {/* HTML Card */}
      <Card className="shadow-lg">
        <Card.Img variant="top" src="/images/html_image.jpeg" alt="HTML" />
        <Card.Body>
           <Card.Title className='text-center font-bold'>HTML</Card.Title>
          <Card.Text className='text-center font-semibold' >Learn HTML from Scratch with our Experts.</Card.Text>
          <Card.Link href="/html" className='btn-course html-btn rounded-full bg-[#eb9b27] hover:bg-[#92723f] font-semibold'>Go to HTML</Card.Link>
        </Card.Body>
      </Card>

      {/* CSS Card */}
      <Card className="shadow-lg">
        <Card.Img variant="top" src="/images/css_image_1.webp" alt="CSS" />
        <Card.Body>
          <Card.Title className='text-center font-bold'>CSS</Card.Title>
          <Card.Text className='text-center font-semibold' >Master CSS and bring your designs to life.</Card.Text>
          <Card.Link href="/css" className='btn-course css-btn rounded-full bg-[#56a2d8] hover:bg-[#396b8f] font-semibold'>Go to CSS</Card.Link>
        </Card.Body>
      </Card>

      {/* JavaScript Card */}
      <Card className="shadow-lg">
        <Card.Img variant="top" src="/images/js_image.webp" alt="JavaScript" className="js-img object-contain mx-auto"/>
        <Card.Body>
           <Card.Title className='text-center font-bold'>JavaScript</Card.Title>
            <Card.Text className='text-center font-semibold' >Become fluent in JavaScript — the language of the web.</Card.Text>
          <Card.Link href="/javascript" className='btn-course rounded-full bg-[#cdb709] hover:bg-[#afa555] font-semibold'>Go to JavaScript</Card.Link>
        </Card.Body>
      </Card>

      {/* Angular Card */}
      <Card className="shadow-lg">
        <Card.Img variant="top" src="/images/angular9826.logowik.com.webp" alt="Angular" className="ang-img object-contain mx-auto"/>
        <Card.Body>
           <Card.Title className='text-center font-bold'>Angular</Card.Title>
          <Card.Text className='text-center font-semibold' >Build enterprise-grade apps with Angular.</Card.Text>
          <Card.Link href="/angular" className='btn-course rounded-full bg-[#e33237] hover:bg-[#9c3f42] font-semibold'>Go to Angular</Card.Link>
        </Card.Body>
      </Card>

      {/* ReactJS Card */}
      <Card className="shadow-lg">
        <Card.Img variant="top" src="/images/react_image.jpeg" alt="ReactJS" />
        <Card.Body>
          <Card.Title className='text-center font-bold'>ReactJS</Card.Title>
          <Card.Text className='text-center font-semibold' >Learn to build powerful UIs with ReactJS.</Card.Text>
          <Card.Link href="/react" className='btn-course rounded-full bg-[#1e60f5] hover:bg-[#2d4886] font-semibold'>Go to ReactJS</Card.Link>
        </Card.Body>
      </Card>

    </div>
    </>
  );
}

export default Courses;
