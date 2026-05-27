const GolgiShape = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <svg width="700" height="500" viewBox="0 0 400 300" fill="none">

        {/* SHAPE */}
        <path
          d="
            M60,140
            C40,80 120,40 170,70
            C210,90 230,40 280,60
            C330,80 360,140 340,180
             C210,90 230,40 280,60
            C330,80 360,140 340,180
            C320,230 250,240 210,210
            C180,190 150,250 100,220
            C60,200 80,170 60,140
            Z
          "
          fill="url(#golgiGradient)"
        />

        {/* INNER SOFT LAYER */}
        <path
          d="
            M90,150
            C80,110 140,90 170,110
            C200,130 220,100 260,120
            C300,140 310,180 290,200
            C260,230 220,220 200,200
            C170,180 140,240 110,210
            C90,190 100,170 90,150
            Z
          "
          fill="rgba(255,255,255,0.08)"
        />

        {/* TEXT AREA */}
        <foreignObject x="110" y="110" width="180" height="100">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "system-ui",
              padding: "10px",
            }}
          >
            The internet is evolving. So are we.
          </div>
        </foreignObject>

        {/* GRADIENT */}
        <defs>
          <linearGradient id="golgiGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" className="Fak" />
          </linearGradient>
        </defs>

      </svg>
    </div>
  );
};

export default GolgiShape;