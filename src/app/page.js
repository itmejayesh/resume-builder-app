import Navbar from "@/components/Navbar";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

export default function Home() {
	return (
		<main className="h-screen w-screen">
			<Navbar />
			<Container>
				<Typography component="h2" color="grey" variant="h4" py={1}>
					Templates
				</Typography>
				<Typography color="grey" variant="h6" pb={5}>
					Select a Template to get started
				</Typography>

				<Grid container spacing={3}>
					<Grid md={3}>
						<Link href={`/details-filling`}>
							<div className="bg-black">
								<img
									src="/t1.jpg"
									alt="template-1"
									className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
								/>
							</div>
						</Link>
					</Grid>
					<Grid md={3}>
						<Link href={`/details-filling`}>
							<div className="bg-black">
								<img
									src="/t2.png"
									alt="template-2"
									className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
								/>
							</div>
						</Link>
					</Grid>
					<Grid md={3}>
						<Link href={`/details-filling`}>
							<div className="bg-black">
								<img
									src="/t3.jpg"
									alt="template-3"
									className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
								/>
							</div>
						</Link>
					</Grid>
					<Grid md={3}>
						<Link href={`/details-filling`}>
							<div className="bg-black">
								<img
									src="/t4.jpg"
									alt="template-4"
									className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
								/>
							</div>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
