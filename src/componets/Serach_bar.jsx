import { Container } from '@mui/material'
import React, { useRef } from 'react';
// import { TieredMenu } from 'primereact/tieredmenu';
// import { Button } from 'primereact/button';

const Serach_bar = () => {
    const menu = useRef(null);
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];
    return (
        <>
            <div className=' py-[30px]'>
                <div className='my-container'>
                    <div>
                        <div>
                            {/* <div className="card flex justify-content-center">
                                <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
                                <Button label="Show" onClick={(e) => menu.current.toggle(e)} />
                            </div> */}
                        </div>

                        <div>

                        </div>

                        <div>
                            <button className=' text-[#3264D1] border-2 rounded w-[250px] py-1 font-bold transition-all duration-300 hover:text-white hover:bg-black'>BLACK FRIDAY <br /> <span className=' text-[#797979] text-[12px]'>Get 45% Off !</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serach_bar
