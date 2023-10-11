import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

const fontDisplay = fetch(
	new URL("../../../fonts/SilkaMono/silkamono-semibold-webfont.ttf", import.meta.url)
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
					flexDirection: "column",
					textAlign: "left",
					alignItems: "flex-start",
					justifyContent: "center",
					padding: 128,
				}}
			>
				<h1 style={{ fontFamily: "Silka Mono", fontSize: 84, color: "#eee", lineHeight: 1, width: "70%" }}>
					{title}
					<span style={{ color: "#1199ff" }}>.</span>
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
					weight: 600,
				},
			],
		}
	);
}
