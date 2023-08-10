import React from 'react';
import { BsGlobe, BsPencil, BsBoxArrowUpRight } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';

const TopFeatures = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-10 w-1/2'>

            <div className='border border-color: rgb(17 24 39) px-5 text-center py-8 rounded-lg'>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <BsGlobe className='text-2xl text-blue-800'></BsGlobe>
                    </div>

                    <div>
                        <h2 className='font-semibold text-blue-800'>Translate text</h2>
                        <h5>31 Language</h5>
                    </div>
                </div>
            </div>

            <div className='border border-color: rgb(17 24 39) px-5 text-center py-8 rounded-lg'>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <GrDocumentText className='text-2xl text-blue-800'></GrDocumentText>
                    </div>

                    <div>
                        <h2 className='font-semibold text-blue-800'>Translate files</h2>
                        <h5>.pdf, .docx, .pptx</h5>
                    </div>
                </div>
            </div>

            <div className='border border-color: rgb(17 24 39) px-5 text-center py-8 rounded-lg'>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        <BsPencil className='text-2xl text-blue-800'></BsPencil>
                    </div>

                    <div>
                        <h2 className='font-semibold text-blue-800'>DeepL Write  <BsBoxArrowUpRight/> </h2>
                        <h5>AI-powered edits</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopFeatures;