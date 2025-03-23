import { Description, Dialog, DialogPanel } from "@headlessui/react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Anchor } from "../components/anchor";
import { DesktopView } from "../components/is-mobile";
import closeIcon from "../assets/close_24dp.svg";

type GameData = {
	name: string;
	itch?: string;
	html?: string;
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
		itch: "https://night0.itch.io/heltris",
		html: "https://itch.io/embed-upload/11388342?color=171239",
		thumbnail: "https://img.itch.zone/aW1nLzE3NDQ0NTQ4LnBuZw==/315x250%23c/nq21NE.png"
	},
	{
		name: "Caternal",
		itch: "https://silvyger.itch.io/caternal",
		html: "https://itch.io/embed-upload/7567811?color=cb9269",
		thumbnail: "https://img.itch.zone/aW1nLzExNTQ2NDcwLnBuZw==/315x250%23c/SoiIyJ.png"
	},
	{
		name: "You Are The Floor",
		itch: "https://night0.itch.io/you-are-the-floor",
		thumbnail: "https://img.itch.zone/aW1nLzE0Mjk1ODE4LnBuZw==/315x250%23c/T3bvvp.png"
	},
	{
		name: "Guardin' Gladiator",
		itch: "https://night0.itch.io/guardin-gladiator",
		html: "https://itch.io/embed-upload/8279191?color=333333",
		thumbnail: "https://img.itch.zone/aW1nLzEyNzIwODU3LnBuZw==/315x250%23c/gpd1ZU.png"
	},
	{
		name: "Budget Bounty",
		itch: "https://ricenoodles.itch.io/budget-bounty",
		html: "https://itch.io/embed-upload/8806253?color=181330",
		thumbnail: "https://img.itch.zone/aW1nLzEzNTc2NzAzLnBuZw==/315x250%23c/fPPgcO.png"
	},
	{
		name: "Kitty Kart",
		itch: "https://night0.itch.io/kitty-kart",
		thumbnail: "https://img.itch.zone/aW1nLzEyMjUwNDg2LnBuZw==/315x250%23c/7%2BvKPe.png"
	},
	{
		name: "Tricky Treat",
		itch: "https://night0.itch.io/tricky-treat",
		html: "https://itch.io/embed-upload/6048906?color=37115b",
		thumbnail: "https://img.itch.zone/aW1nLzcyOTQ4NjIucG5n/315x250%23c/asrC2C.png"
	},
	{
		name: "Whacky Weapons",
		itch: "https://silvyger.itch.io/whackyweapons",
		html: "https://itch.io/embed-upload/8631787?color=a8de6e",
		thumbnail: "https://img.itch.zone/aW1nLzEzMzEyNjI3LnBuZw==/315x250%23c/ekWkfu.png"
	},
	{
		name: "Panda Wizard",
		itch: "https://proto-here.itch.io/panda-wizard",
		thumbnail: "https://img.itch.zone/aW1nLzEzMTcxODYyLnBuZw==/315x250%23c/Ri53pB.png"
	}
]

// Note we *could* embed the game into the site, but instead we're just opening the game as a new page for now
export const GameSection = () => {
	const [modalData, setModalData] = useState<GameData | null>(null);

	const gameList = useMemo(() => data.map((x, i) => x.name && <GameCard key={i} data={x} setModal={setModalData}/>), [data]);

  return (
	<>
		<Anchor id="games" title="Games"/>
		<div className="container-fluid my-8">
			<div className="row gx-3 gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
				{gameList}
			</div>
		</div>
		{
			modalData != null && <RenderGameModal data={modalData} close={() => setModalData(null)}/>
		}
	</>
  );
};

const RenderGameModal = ({data: game, close} : { data: GameData; close: () => void; }) => {
	return <>
		<Dialog open={true} onClose={close}>
			<div style={{ position: "fixed", inset: 0, display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#00000066" }}>
				<DialogPanel style={{ width: "80vw", background: "#000000dd", borderRadius: 8, overflow: "hidden" }}>
					<div className="row" style={{ background: "#4263e8", margin: 0 }}>
						<h2 style={{ paddingLeft: "12px" }}>{game.name}</h2>
						<div style={{ flexGrow: 1 }}></div>
						<img className="modal-button" onClick={close} style={{ width: "auto", padding: 8 }} src={closeIcon}/>
					</div>
					<div className="container-fluid">

						<div className="row">
							<div className="col d-flex flex-column p-4">
								<div>
									<Description className="m-0">Game Description</Description>
									<p>Wow, this is a cool game! You should check it out.</p>
								</div>
								<div className="flex-grow-1"/>
								<DesktopView>
									{"html" in game &&
										<a className="w-100" href={game.html} target="_blank"><button>Play in Browser</button></a>
									}
								</DesktopView>
								{"itch" in game &&
									<a className="w-100" href={game.itch}><button>Go to itch.io page</button></a>
								}
							</div>
							<img className="col p-0 d-none d-sm-block" src={game.thumbnail} style={{ width: "100%", height: "auto" }}/>
						</div>

						<div className="row d-block d-sm-none mt-4">
							<img src={game.thumbnail} style={{ width: "100%" }}/>
						</div>

					</div>
				</DialogPanel>
			</div>
		</Dialog>
	</>
}