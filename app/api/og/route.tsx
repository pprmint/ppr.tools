import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

const fontDisplay = fetch(
	new URL("../../../fonts/SilkaMono/silkamono-medium-webfont.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const title = searchParams.get("title");
	const fontDataDisplay = await fontDisplay;
	return new ImageResponse(
		(
			<div
				style={{
					backgroundImage: "url(https://tools.ppr.one/images/OG_bg.png)",
					display: "flex",
					width: "100%",
					height: "100%",
					textAlign: "left",
					alignItems: "center",
					justifyContent: "flex-start",
					padding: 128,
				}}
			>
				<h1 style={{ fontFamily: "Silka Mono", fontSize: 80, color: "#eee", lineHeight: 1, width: "60%" }}>
					{title}
				</h1>
			</div>
		),
		{
			width: 1600,
			height: 836,
			fonts: [
				{
					name: "Silka Mono",
					data: fontDataDisplay,
					weight: 500,
				},
			],
		}
	);
}
