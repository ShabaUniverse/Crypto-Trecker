import React from 'react'

const Guide = () => {
  return (
    <div className="guide pt-16">
        <div className="container max-w-6xl mx-auto">
            <div className="wrapper text-center">
                <div className="title px-5">
                    <h3 className='text-4xl font-bold'>How it Work</h3>
                    <p className='text-gray-400 text-lg mt-5'>Stacks is a production-ready library of stackable content blocks built in React.</p>
                </div>

                <div className="steps flex flex-col justify-center items-center md:flex-row">
                    <div className="step1 flex flex-col justify-center items-center px-10 md:px-2">
                        <img src="images/Cloud.png" alt="" />
                        <span className='text-gray-400 text-xs font-semibold '>STEP 1</span>
                        <h5 className='font-bold text-xl my-3'>Download</h5>
                        <p className='text-gray-400'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                    </div>

                    <div className="step1 flex flex-col justify-center items-center px-10 md:px-2">
                        <img src="images/Wallet.png" alt="" />
                        <span className='text-gray-400 text-xs font-semibold '>STEP 2</span>
                        <h5 className='font-bold text-xl my-3'>Connect Wallet</h5>
                        <p className='text-gray-400'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                    </div>

                    <div className="step1 flex flex-col justify-center items-center px-10 md:px-2">
                        <img src="images/Mining.png" alt="" />
                        <span className='text-gray-400 text-xs font-semibold '>STEP 3</span>
                        <h5 className='font-bold text-xl my-3'>Start Trading</h5>
                        <p className='text-gray-400'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                    </div>

                    <div className="step1 flex flex-col justify-center items-center px-10 md:px-2">
                        <img src="images/Comparison.png" alt="" />
                        <span className='text-gray-400 text-xs font-semibold '>STEP 4</span>
                        <h5 className='font-bold text-xl my-3'>Earn Money</h5>
                        <p className='text-gray-400'>Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guide
