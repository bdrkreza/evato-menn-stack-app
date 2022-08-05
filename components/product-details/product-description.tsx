import { Card, CardContent, Typography } from "@mui/material";

type Props = {};

export default function ProductDescription({}: Props) {
  return (
    <div>
      <Card>
        <CardContent className="card-description">
          <Typography component="h1">Description</Typography>
          <Typography component="h2">
            The Logitech Signature M650 Wireless Mouse is at your disposal. This
            tiny wireless mouse, designed to fit comfortably in small to medium
            right hands, connects to your compatible laptop or tablet by the
            bundled Logi Bolt USB Type-A RF receiver or via Bluetooth
            technology. Meanwhile, its sophisticated optical sensor with a
            resolution of 4000 dpi delivers smooth and accurate control. The
            Signature M650 also has an adaptable Smart-Wheel that automatically
            shifts between accurate line-by-line scrolling and free spin mode
            with a flick of your finger to allow you to quickly navigate through
            the material. The primary and two programmable side buttons are
            strengthened with Logitech SilentTouch technology, which can help
            you avoid disturbing your environment with mouse clicks or having
            them picked up during conversations. You can stay productive for
            extended periods thanks to the ergonomic design and comfortable
            thumb region. Depending on usage, the Logitech Signature M650 should
            last for around two years on a single battery. It also works on
            Windows, macOS, iPadOS, Chrome OS, Android, and Linux. The Logitech
            Signature M650 Mouse comes with a 01-year warranty.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ mt: 3 }} className="card-description">
        <CardContent>
          <Typography component="h1">
            What is the price of Logitech Signature M650 Wireless Mouse in
            Bangladesh?
          </Typography>
          <Typography component="h2">
            The latest price of Logitech Signature M650 Wireless Mouse in
            Bangladesh is 3,299৳. You can buy the Logitech Signature M650
            Wireless Mouse at best price from our website or visit any of our
            showrooms.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
