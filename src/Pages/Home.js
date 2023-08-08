import image from '../Images/image1.jpg'
import image1 from '../Images/image1.png'
import image2 from '../Images/gear-metal-wheels-close-up.jpg'
import image3 from '../Images/close-up-metal-gears-3d-rendering.jpg'
import image4 from '../Images/gears-cogwheels.jpg'
import { BsGearWideConnected } from 'react-icons/bs'

const HomePage = () => {
    const Cont = () => {
        return (
            <>
                <div className='col-md-4 p-2 col-6 text-white text-center'>
                    <div className='d-flex justify-content-center flex-column' style={{ height: '300px', backgroundColor: 'rgba(134, 145, 145, 0.3)' }}>
                        <div className='p-3'>
                            <BsGearWideConnected size={90} />
                            <div className='py-3' style={{ fontSize: '10px' }}>
                                stuff about the above logo
                                stuff about the above logo
                                stuff about the above logo
                                stuff about the above logo
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div style={{ minHeight: "100vh", background: `url(${image}) no-repeat fixed  right`, backgroundSize: 'cover' }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%' }}>
                        <div className='p-3' style={{ paddingTop: '100px'}}>
                            <div style={{ height: '60vh' }} className='d-flex justify-content-center flex-column'>
                                <div>
                                    <div className=' text-center h-100'>
                                        <div className=''>
                                            <div className=''>
                                                <div className='text-white' style={{}}>
                                                    <div className='fw-bold display-5'>
                                                        QUAMECH ENGINEERING <br /> SERVICES
                                                    </div>
                                                    <div className='fs-4 fw-light py-4'>
                                                        some write up for the engineering company to identify themselves
                                                    </div>
                                                    <div>
                                                        <button className='btn btn-outline-info text-white btn-lg rounded-0'>Contact us now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3 bg' style={{paddingBottom:"200px"}}>
                            <div>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-12 col-md-10'>
                                        <div>
                                            <div className='row'>
                                              <Cont/>
                                              <Cont/>
                                              <Cont/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='' style={{overflow:'hidden'}}>
                    <div className='row'>
                        <div className='col-md-4 d-none d-md-block col-12' >
                            <div>
                                <img src={image1} width='100%'/>
                            </div>
                        </div>
                        <div className='col-md-8 col-12 p-5'>
                            <div className='row' style={{height:'100%'}}>
                                <div className='col-md-1'></div>
                                <div className='col-md-10 col-12' >
                                    <div className='d-flex flex-column justify-content-center ' style={{height:'100%'}}>
                                        <div>
                                            <div className=''>
                                                <div className='h3'>We are here to serve you</div>
                                                <div className='display-3'>
                                                    Contact us so that we can give you professional work, because we are the best in what we do
                                                </div>
                                                <div className='fw-bold fs-5'>
                                                    need more convincing? no problem here are some of the services we offer
                                                </div>
                                                <div className='py-3'>
                                                    <button className='btn btn-outline-danger rounded-0 btn-lg'>Check out our services</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='' style={{minHeight:'300px', background:`url(${image3}) center no-repeat`, backgroundSize:'100% auto'}}>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomePage