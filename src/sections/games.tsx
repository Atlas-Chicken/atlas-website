import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

type GameData = {
	name: string;
	link: string;
	thumbnail: string;
}

type GameProps = {
	data: GameData,
	setModal: Dispatch<SetStateAction<GameData | null>>
}

const GameCard = ({ data, ...props } : GameProps) => {
	return (
		<div className="col game-card p-4">
			<a onClick={() => props.setModal(data)}>
				<div style={{ minHeight: "64px", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
					<img style={{ borderRadius: 16, width: "100%" }} src={data.thumbnail}></img>
					<h2>{data.name}</h2>
				</div>
			</a>
		</div>
	);
}

const data = [
	{
		name: "Heltris",
		link: "https://night0.itch.io/heltris",
		thumbnail: "https://img.itch.zone/aW1nLzE3NDQ0NTQ4LnBuZw==/315x250%23c/nq21NE.png"
	},
	{
		name: "Caternal",
		link: "https://silvyger.itch.io/caternal",
		thumbnail: "https://img.itch.zone/aW1nLzExNTQ2NDcwLnBuZw==/315x250%23c/SoiIyJ.png"
	},
	{
		name: "You Are The Floor",
		link: "https://night0.itch.io/you-are-the-floor",
		thumbnail: "https://img.itch.zone/aW1nLzE0Mjk1ODE4LnBuZw==/315x250%23c/T3bvvp.png"
	},
	{
		name: "Guardin' Gladiator",
		link: "https://night0.itch.io/guardin-gladiator",
		thumbnail: "https://img.itch.zone/aW1nLzEyNzIwODU3LnBuZw==/315x250%23c/gpd1ZU.png"
	},
	{
		name: "Budget Bounty",
		link: "https://ricenoodles.itch.io/budget-bounty",
		thumbnail: "https://img.itch.zone/aW1nLzEzNTc2NzAzLnBuZw==/315x250%23c/fPPgcO.png"
	},
	{
		name: "Kitty Kart",
		link: "https://night0.itch.io/kitty-kart",
		thumbnail: "https://img.itch.zone/aW1nLzEyMjUwNDg2LnBuZw==/315x250%23c/7%2BvKPe.png"
	},
	{
		name: "Tricky Treat",
		link: "https://night0.itch.io/tricky-treat",
		thumbnail: "https://img.itch.zone/aW1nLzcyOTQ4NjIucG5n/315x250%23c/asrC2C.png"
	},
	{
		name: "Whacky Weapons",
		link: "https://silvyger.itch.io/whackyweapons",
		thumbnail: "https://img.itch.zone/aW1nLzEzMzEyNjI3LnBuZw==/315x250%23c/ekWkfu.png"
	},
	{
		name: "Panda Wizard",
		link: "https://proto-here.itch.io/panda-wizard",
		thumbnail: "https://img.itch.zone/aW1nLzEzMTcxODYyLnBuZw==/315x250%23c/Ri53pB.png"
	}
]

export const GameSection = () => {
	const [modalData, setModalData] = useState<GameData | null>(null);

	const gameList = useMemo(() => data.map(x => x.name && <GameCard data={x} setModal={setModalData}/>), []);
	
  return (
	<>
		<h2 className="section-title">Games</h2>
		<div className="container-fluid">
			<div className="row gx-3 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
				{gameList}
			</div>
		</div>

		<Dialog open={modalData != null} onClose={() => setModalData(null)}>
			<div style={{ position: "fixed", inset: 0, display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#00000066" }}>
				<DialogPanel style={{ width: "80vw", background: "#000000dd", borderRadius: 8, overflow: "hidden" }}>
					<DialogTitle className="p-2" style={{ background: "#4263e8" }}>{modalData?.name}</DialogTitle>
					<div className="container-fluid">

						<div className="row">
							<div className="col d-flex flex-column p-4">
								<div>
									<Description className="m-0">Game Description</Description>
									<p>Wow, this is a cool game! You should check it out.</p>
								</div>
								<div className="flex-grow-1"/>
								<a className="w-100" href={modalData?.link}><button>Go to itch.io page</button></a>
							</div>
							<img className="col p-0 d-none d-sm-block" src={modalData?.thumbnail} style={{ width: "100%", height: "auto" }}/>
						</div>

						<div className="row d-block d-sm-none mt-4">
							<img src={modalData?.thumbnail} style={{ width: "100%" }}/>
						</div>

					</div>
				</DialogPanel>
			</div>
		</Dialog>
	</>
  );
};