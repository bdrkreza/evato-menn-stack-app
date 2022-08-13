import { Box, Card, CardContent, Typography } from "@mui/material";

type Props = {};

export default function ProductSpecification({}: Props) {
  return (
    <div>
      <Card className="card-specification">
        <CardContent>
          <Box className="section-head">
            <Typography component="h1">Specification</Typography>
          </Box>
          <Box>
            <table
              className="data-table flex-table"
              cellPadding="0"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <td className="heading-row">Main Features</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="name">Connection Type</td>
                  <td className="value">Logic Bolt USB Receiver</td>
                </tr>
                <tr>
                  <td className="name">Optical Sensor Resolution</td>
                  <td className="value">
                    Nominal value: 400 dpi
                    <br />
                    Max value: Up to 4000
                  </td>
                </tr>
                <tr>
                  <td className="name">Resolution</td>
                  <td className="value">
                    Battery type: 1 x AA battery (included)
                    <br />
                    Rose plastics: 26% post-consumer recycled material
                    <br />
                    Graphite plastics: 64% post-consumer recycled material
                  </td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <td className="heading-row">Gaming Features</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="name">Acceleration</td>
                  <td className="value">Yes</td>
                </tr>
                <tr>
                  <td className="name">Button</td>
                  <td className="value">5</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <td className="heading-row">Physical Specifications</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="name">Color</td>
                  <td className="value">
                    Graphite (910-006262)
                    <br />
                    Rose (910-006263)
                  </td>
                </tr>
                <tr>
                  <td className="name">Dimension(LxWxH)</td>
                  <td className="value">
                    Height: 37.8 mm
                    <br />
                    Width: 61.80 mm
                    <br />
                    Depth: 107.19 mm
                    <br />
                  </td>
                </tr>
                <tr>
                  <td className="name">Weight</td>
                  <td className="value">
                    Weight: 101.2 g - weight includes a battery (25g) and
                    receiver (1.8g)
                  </td>
                </tr>
                <tr>
                  <td className="name">Battery Life</td>
                  <td className="value">Up to 24 months battery life</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <td className="heading-row">Warranty Information</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="name">Warranty</td>
                  <td className="value">01 years warranty</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
