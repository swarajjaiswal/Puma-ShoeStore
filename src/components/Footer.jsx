import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="foot1 bg-zinc-100 bg-gradient-to-r from-gray-800 to-gray-700 text-white mt-5 h-full">
            <div className=" footer flex p-10 ">
                <div className=" left1 flex flex-1  justify-between px-8 py-4  mx-3">
                    <div className="footerItem flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold flex items-start">Products</h2>
                        <ul className="space-y-2 flex flex-col items-start text-lg text-gray-400">
                            <li className='hover:text-gray-300 cursor-pointer'>Footwear</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Clothing</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Accessories</li>
                        </ul>
                    </div>
                    <div className="footerItem flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold flex items-start">Our Offerings</h2>
                        <ul className="space-y-2 flex flex-col items-star text-lg text-gray-400">
                            <li className='hover:text-gray-300 cursor-pointer'>Men's Shoes</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Women's Shoes</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Kids' Shoes</li>
                        </ul>
                    </div>
                    <div className="footerItem flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold flex items-start">Company</h2>
                        <ul className="space-y-2 flex flex-col items-star text-lg text-gray-400">
                            <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Contact Us</li>
                            <li className='hover:text-gray-300 cursor-pointer'>Terms of Use</li>
                        </ul>
                    </div>



                </div>

                <div className="right space-y-3 flex flex-col justify-center items-center p-5">
                    <h1 className='font-bold text-xl mb-2' >Subscribe to our newsletter</h1>
                    <div className="joins space-x-4">
                        <input className='border-solid border-2 border-black-500' type="email" placeholder=' xyz@gmail.com' />
                        <button className='bg-black text-white px-2' >Join</button>
                    </div>
                    <div className="follow space-y-2">
                        <h2 className='text-lg font-semibold'>Follow us</h2>
                        <div className="icons2 flex space-x-4">
                            <a href="https://www.facebook.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAxhJREFUWEe1mLGO1DAQhj+L7goKdBUSQjohqCiu4xFAQsB1gHiDk3iF3W15AB4BSkAU8Ah0tCB0DaKhWKi4CmHixIln7Eni7MI2oGQ88/uf3/8456j4OcBXxPUhbfzSRXFxWGb8dsy2APRY3RJQNZaaQB1Tw9wIQ1CUm6kviy1bG6PFP5q97sVt4FaHSqavYSVuZj70Q1PjfV7cGbt5gOfV3nKoS3ACvJahXcs0CWs8qzyoI2pB32Ji1yQrT+iQZ9OErfMeDLXji3VTWgGq2+wOUY5NgzbUUxjyTAWgGnKyJOc43uL5JJ5fBe4Ch+JZy5CEIzQ0ELcvQx+BO8D3QQupJ0Ev94VKEqD+lBmqWINbtd5sUDPD1lfgGPjR7drRasgAFFnJGOpKxt8YQ/PnV6Q4wctTEwGlIgNDEe+mQbuWg6k0RkdxyiblmvD+AS4Cv8QmD8CH9t2MdD8EboxryGKoAKQZmrDJn8CljPA3wL2iB73PFKcsMCoUtuzYF0C3Xp+gkPkLcK3Xk3FnmNLQIKUJYzSaF1Xu8AMgIfwz4Eit0vuoANT5wqpGylnMNvOYgEMAMjPWAyq46H1CT5BT4Pmk6PXLYAtXJo1RaigGJh8yXmbFDUAGE10PL4D/na2vZ6iyZae+ZWgsWj2/DnzOQsvRIRGnUxad2niZSrT/GxhKQrZ7C+0d611mARUMRR+y96ydNxsjWxyH2RWlPGW6Z+UsK0gwjNG+0xRSnjllpvR3mWU60cRwXQBo4H/T6K+bZaLTOfTs+iE1MXnAY8tUTEXL5HDtR4fu2zKnTmtNhhwc9VdYQ5eJoX5QZKcmPLYZMk5cetRmmQVk8Dst6uiDNkPzdmwAcmfg9SyTZttO+7mWtQwZPqQTpS+QJLE4XJU1LByulRqaJ6eNmGlZcXsMa6adOhZ+BLyQ+viPPvS4uUG+zOWZfyge4HkCXC6ZmZxw58Cz7GL/VN0idcJvceNhXeZD6ZKlvzJrJmxlP0XN7FM5M959atbMuzG842vFCsOT7HxLdyHjZ9aG1//gp6vYV5Heiru/D47h+gv3Qzo/boDdNgAAAABJRU5ErkJggg==" />  </a>
                            <a href="https://x.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA5pJREFUWEelmE2ITlEYx3/H12byETYKka/sRmKyEFNSaMpnElYoUkoNhYaQrwxLWZCFzWQhCVt2JKmJlDQyks0Im0mKOe7z3nPfe86959x73tept7lz5/l+/s//Oe8omkcBOvBbLtXak0Khm1ZzD7avst84H2EbJf2SaOOF+9YO1DYgUq1XxU2qMqE8FqNUCs5VTwOyhTzOamzkJiprFdmIymRbqITfXSg7UwOPklWhmAxqHLSZgN3WYEAh2xE+FwFHgFXAUuAN8AK4bZ4zjEwAFgPvHBx7HEwH1gL3U8GIEHKLp5J5OgNMDNR7N/AW6AYOAz2g3hfpxug2HR8FrgJbgYdew36U7wHulmcmyG2XTPCTFXzPWME39veAHcBfYDPwKKJGM4EPwLRiTQP09RT4kbRxjqnWaJaILyCpSo8RGAOuA6eBXxXt2wkMlLvrck+BtUd0A2dqqPHeEi36OZlg4EKeWePpMyCtfJAEN+aBlbS4t3pOnTUyBKwDPhV1nAqZP65JQP0sYPwrcMd8xGh2bgH7fPgPtPuYgv4cXXnDfGM/DhAcbathphFAgpLPQqDLx/iBgA4AkkRpjq0KmZIq1qPVS9Ay9jKe/3GC47AJeOLDnK9lUp0twDCKBdaNpLXAqndSp0IPlluWwtkFteIKmuOtc2JhSYfCV4yimWpoJZdypsxV7gReG/MFs+Fd5gWDrwTpBnDwWeQqXy7nFPT5psCm+VAVa/bgfrPXvLTmw1AWoExCf0KMU/zVD1UrwM2pkZ/JdM0GRquCDnV7AzAJEBbeVR5QW62mJjk+zuuU9a3jJhCskILlGl41MR+x0IIXg1RX9tU84FvVuPqI0Za/ARyKAWxEvFLlgTruqMJQVpxrjT1WM2DhKW+Mwc24xIScA6fgfwUg951lwOpMJaIqIvrYjPnvWNTVVVH+Ph7FQTRngRnZzgp9t7IMSov2An+KTtqZMrnzzk2uHEKUF4El3sgthrV4Sx5Fp8/5OhyRutMyBRs1sjbUfNDCF7L5I46T77ChiectJNAU9WFIKnEiuYxvR9HhfgWuRIFc3mUtXE5vl9Wn1LKKXZZtSSHFblBdoFemHKJmge4wN72P5uegAe6XNIQQU0eTZ55JKOqSn8jRdMXiZrKOGCuiDbckzrVfP8BDrsm2HLSllF3QTLC5jZp+1yG2CKVKbJUb6211fYL1Es4sh+6rhfdFHnL//Vazv1oIqVTTkO4/ThAiOWLpl3oAAAAASUVORK5CYII=" /></a>
                            <a href="https://www.instagram.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABE5JREFUWEetmF2IVVUUx38bBWHAN30QtVLHRNMiIZB6URAfBhm/MIpCEIPEevBBmcjRHL9HURGUCAIre+lrKkWCXnwwiJCawC9w/KCHrECpp+oh2Z51z77n7H322uecITdcuJy79lr//V//tdY+1/A/lgFs7X7Fwn/U+W4w2MKPqXUabQ6j63vdUxeshOw/d34iB4Z6QNHpGzhpczoFlx9Gfm5YIaVN1hDSGqSjmmKNoU4AJa+KOhYCzwJPYJhQJj0hpNznA+AOMApcbT5MDiWV0O4PLwN7gN5G01TKcj2NgR0EPlWBealUAHXSNM3CR8DyCHStDhpr71swG8D+EQOTuOl1AVhad5oUUN1lAPQboC+QitNOCtCLBj7Je8x4Ra3A0RldC3xZtY4B5ZtvAbPrRdiYGtn+H3AcuJZ9F/3M8XzKs6fCikLtQ1JNl2vBtG9H5wz0u27en1Xp1xW/M4Bf/dTnDIVddX2yEsKCvG/gqIVLwE/ApCwFzwBLgO1AD5ifwUqrkLUJeL8CaCVw3n+maWgLcKoEGrpw5IwArwF/xsLs2D+efU4Dy4AfgDHgJQMTbdjzNmN5LwCkNMsBLIfK56EiDXxgYaOjVTTxXMboAtceRReXDNy2ucFF4IWa9A9kTB5uYuidzGB35CRP6+9gZwH/Ak87uzUV2y8yS/EhnVlsr7t0amTuAA7EgEIN7QGz059B3oa3M+cHXaAjmfjX5b+51lCS+Zk1bMfyS1ZZZ4BXtfK20PVX6NgTdVGA+wBBrolnEXAlO30b4a/DMmJgizWcSsw+aQX7mxiqAApUNtXAPWvYhWWoRhtyukGs2e+qTKrQW4VPSa3MyWJpVSYGO0OT4l44HbibNzmzt+G+2E1HXV8bypDvrl5RXOwCdQdQovc9b+B7C9L2RbzBySrX2dWuEW7INPehapgzvdevaG10DGHZlUiHpFPYmwkMA3I10eT2sYW3XBeW0bE1l36F0zKtBSkBILdBtJEDCpuYeLsHPIbhHyxzXXm/UgklVSU+boHpBSv6mZw4oIAeroapBh4UGvV0dMr7jAVJgyzR1GJgvju89Jwfgd+AKdld6jtgXo34hbkTQSylI7+B5aSWB++dR0aHzKa/EsFEYzISBFTd2ix2MUOhrKXzSsDwaUyZ3PiOOUZGDUy1sAJMP1h3y2y8oqzKGD7ry0Mre6FfZtK4Vtns29xNCpsn3eAtj5/YfrNymVLAhUQnRk2wrxLrhqYvrcrEiVD5VSuKwjnYaoszCu9Czo+Wsq5TaXwiTm9V3sMb3+2T+D5381CtnVC8Ja89TrSvtz52o4Y7ve1dLNuAvzW/dQx17ftcr+hVem0jVg+j3BrfBOS9LOdWOYAHKG7LlWjlqzRMULtCHCB+lW5RhI2nfKQGCjn1o6M2uvLSqEzM2n88Gk7XRkO5i+hk4QM9E9HVVv3HLTk61BrU/rNL6SCSYWiokBnd8R4C/GNcPYTkwr4AAAAASUVORK5CYII=" /></a>
                            <a href="https://www.linkedin.com/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAdRJREFUWEft2DusDVEUxvHfFRQk4pEo1NxKIxpReDZKQkNudXVXtKLwVmp1EjoKCUqFeDSCQkGpu5RXJ94Rs2TmZmdnziNz5pxzJbOr2TOz1vqfb621954zY4WNmRXGowMalJFeCh3BnkHGIz5/VcR4nPuoAzqKhyMGG9b8GB6lL9cBXcHlYT2O+N7Vwj7iLY//EmgJd/ASezGPLSMqU5k3Uig3uo4L0wQ6hGcJwGE8mSZQKHIpAZi6Qp9xC6/LGjqNzdNUqKXYtW4aFfULPE/c7cPBch7p+1Neh2pniy5cxG28wTfswnlsrUFqBJQbXcS10vmaouN+l9fbsYBzyb2KYQOeYncGNVagjQXMV/zskeNQ6u0kgapYm7AD74pUfc8APiCUbHVh7JWyCHIc9/l3zvqI2Qwqnp2YJNB77EwCBuCDZH4TZ9oGikUyijFGWtQx/4L1ScAo8BvJPJohFJ5Yyn5gbRIwjhYVfNxO0x3zVrqsn0K/sLqPAnHOSs8/HVCuQKfQRGoo31z3F5vtgbJw08216qJVSVH3s23cZdnq3+q0UZe1SpA5GwroZLEH3R0nReL7FO6lseq+y9ZhDtvGDPWp/OFxZFke3b8fg1TvFBqk0F+1k5wlZYYMhgAAAABJRU5ErkJggg==" /></a>
                        </div>
                    </div>
                </div>



            </div>
            <h1 className='text-center mb-3 font-bold text-md w-full p-1 bg-gray-900'>CopyRight &copy; Swaraj Jaiswal. All Rights Reserved 2024</h1>
        </footer>
    );
}

export default Footer;

