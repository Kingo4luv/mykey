import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from 'react';
import OwlCarousel from "react-owl-carousel";


const posts = [
    {
        title: "Lorem ipsum dolor sit amet,  adipiscing elit. Sed pellentesque phasellus phasellus magna. Et eget et",
        author: "Abubakar Adamu",
        date:"Apr 13,2021"
    },
    {
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque delectus doloremque",
        author: "Kunle Adefemi",
        date:"Apr 13,2021"
    },
    {
        title: "sunt vel mollitia ut dolor assumenda nam accusantium excepturi laborum integer habitasse",
        author: "Abubakar Adamu",
        date:"Apr 13,2021"
    },
    {
        title: " Platea eu cursus vel vitae integer habitasse nostra et euismod at consectetur adipisicing elit",
        author: "Trojan Tobi",
        date:"Apr 13,2021"
    },
    {
        title: "Donec eros penatibus enim nec a ante erat id praesent, nibh lectus primis accumsan tincidunt tortor tempor feu",
        author: "Umoh Bassey",
        date:"Apr 13,2021"
    },
]


class BlogPost extends Component{
   carousel: any;
   render(){
       const self = this;

       const options = {
           center: true,
               margin: 20,
               dots: false,
               responsive: {
                   0: {
                       items: 1,
                       margin: 30,
                       loop: true
                   },
                   600: {
                       items: 2,
                       margin: 30,
                       loop: true
                   },
                   1000: {
                       items: 3,
                       loop: true
                   },
                   1200: {
                       items: 3,
                       loop: true
                   }
           },
           onInitialized: function () {
               //@ts-ignore
               self.carousel = this;
           }
       }

       function truncateText(text:string, limit: number){
        if(text.length <= limit){
            return text;
        }
        return text.slice(0, limit) + ' ...';
       }
    return(


    <section className="flex flex-col md:flex-row py-6 md:py-12">
        <div className="w-full md:w-2/5 py-6 md:py-12 flex flex-col items-center px-4">
            <div className="space-y-4 max-w-sm">
            <p className="text-base md:text-lg text-grey">Learn more about digital identity</p>
            <h3 className="text-xl md:text-3xl font-bold text-black">Explore our blog and helpful resources</h3>
            </div>
        </div>
        <div className="w-full md:w-3/5">
            <div className="flex flex-nowrap">
                <OwlCarousel className='owl-theme ' {...options}> 
                    {posts.map((post, i) => {
                        return(
                            <article className="p-4 shadow-drop-down-shadow rounded space-y-5 mb-6">
                                <img className="rounded w-full object-cover object-center h-56" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1047716020%2FPassion-and-execution-will-help-turn-your-business-idea-into-reality-%2F960x0.jpg%3Ffit%3Dscale" alt="" />
                                <h3 className="text-base md:text-lg font-medium text-black">
                                    {truncateText(post.title, 100)}
                                </h3>
                                <p className="text-grey text-sm pb-2">{post.author} - {post.date}</p>
                            </article>
                        )
                    })}
                </OwlCarousel>
            </div>
            <div className="md:flex justify- items-center space-x-6 mt-6 px-3 hidden">
                <button className="focus:outline-none" onClick={() => this.carousel.prev()}>
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle r="23.5" transform="matrix(-1 0 0 1 24 24)" fill="white" stroke="#101010"/>
                    <path d="M15.5128 24.074L19.328 27.8872L19.3281 27.8873C19.4996 28.0589 19.7262 28.1528 19.9725 28.1528C20.2157 28.1528 20.443 28.0596 20.6175 27.8867C20.79 27.7139 20.8844 27.4871 20.8844 27.2429C20.8844 26.9996 20.7912 26.7729 20.6172 26.5988C20.6171 26.5987 20.617 26.5986 20.6169 26.5985L19.8418 25.8274L18.9829 24.9729L20.1945 24.9729L31.6 24.9729C32.0959 24.9729 32.5 24.5688 32.5 24.073C32.5 23.5772 32.0959 23.173 31.6 23.173L20.1945 23.173L18.9873 23.173L19.8409 22.3195L20.6149 21.5455C20.7877 21.3727 20.8824 21.1456 20.8824 20.9011C20.8824 20.6577 20.7891 20.4309 20.6149 20.2567C20.4414 20.0832 20.2169 19.9912 19.9725 19.9912C19.7291 19.9912 19.5023 20.0845 19.3281 20.2587L15.5128 24.074Z" fill="#101010" stroke="#101010"/>
                    </svg>
                </button>
                <button className="focus:outline-none" onClick={() => this.carousel.next()}>
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23.5" fill="white" stroke="#101010"/>
                    <path d="M32.4872 24.074L28.672 27.8872L28.6719 27.8873C28.5004 28.0589 28.2738 28.1528 28.0275 28.1528C27.7843 28.1528 27.557 28.0596 27.3825 27.8867C27.21 27.7139 27.1156 27.4871 27.1156 27.2429C27.1156 26.9996 27.2088 26.7729 27.3828 26.5988C27.3829 26.5987 27.383 26.5986 27.3831 26.5985L28.1582 25.8274L29.0171 24.9729L27.8055 24.9729L16.4 24.9729C15.9041 24.9729 15.5 24.5688 15.5 24.073C15.5 23.5772 15.9041 23.173 16.4 23.173L27.8055 23.173L29.0127 23.173L28.1591 22.3195L27.3851 21.5455C27.2123 21.3727 27.1176 21.1456 27.1176 20.9011C27.1176 20.6577 27.2109 20.4309 27.3851 20.2567C27.5586 20.0832 27.7831 19.9912 28.0275 19.9912C28.2709 19.9912 28.4977 20.0845 28.6719 20.2587L32.4872 24.074Z" fill="#101010" stroke="#101010"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>

    )
    }
}

export default BlogPost;