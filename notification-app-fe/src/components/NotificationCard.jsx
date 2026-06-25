import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            {notification.title}
          </Typography>

          <Typography variant="body2">
            {notification.message}
          </Typography>

          <Chip
            label={notification.type}
            size="small"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}