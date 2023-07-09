'use client'
import SideMenu from '@/app/components/side-menu'
import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
	return (
		<div>
			<div className="w-5/6 mx-auto mt-[10vh] h-full pb-10">
				<div className="bg-hero-pattern bg-no-repeat w-full bg-cover rounded-xl h-full min-h-[600px] mb-10 flex items-center justify-center">
					<h1 className="text-7xl text-white font-medium">Blog Post</h1>
				</div>
				<div className="flex mt-10 gap-32">
					<div className="basis-3/5 flex-col gap-[30px]">
						<img
							src="/assets/zicta-launches.jpg"
							alt="blog image"
							className="w-full h-[600px] bg-contain rounded-xl  drop-shadow-lg full"
						/>
						<div className="flex items-center gap-[10px] py-10 ">
							<img
								src="/assets/placeholder.jpg"
								alt="user"
								className="h-[50px] w-[50px] rounded-full object-fill"
							/>
							<div>
								<p className="font-bold">John</p>
								<p className="text-sm text-gray-200">Posted 2 days ago</p>
							</div>
						</div>
						<h1 className="text-[42px] font-bold text-zicta-blue pb-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</h1>
						<p className="text-justify leading-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
							<br />
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
							Malorum", written by Cicero in 45 BC
							<br />
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?" 1914 translation by H. Rackham "But I
							must explain to you how all this mistaken idea of denouncing
							pleasure and praising pain was born and I will give you a complete
							account of the system, and expound the actual teachings of the
							great explorer of the truth, the master-builder of human
							happiness. No one rejects, dislikes, or avoids pleasure itself,
							because it is pleasure, but because those who do not know how to
							pursue pleasure rationally encounter consequences that are
							extremely painful. Nor again is there anyone who loves or pursues
							or desires to obtain pain of itself, because it is pain, but
							because occasionally circumstances occur in which toil and pain
							can procure him some great pleasure. To take a trivial example,
							which of us ever undertakes laborious physical exercise, except to
							obtain some advantage from it? But who has any right to find fault
							with a man who chooses to enjoy a pleasure that has no annoying
							consequences, or one who avoids a pain that produces no resultant
							pleasure?"
						</p>
					</div>
					<div className="basis-2/5">
						<SideMenu />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPost
