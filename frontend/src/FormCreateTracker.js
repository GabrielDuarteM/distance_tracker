import React from "react"
import { Button, TextField } from "material-ui"
import axios from "axios"

const FormCreateTracker = ({ getListTrackers }) => [
  <TextField key="activity" id="activity" label="Activity" />,
  <TextField key="distance" id="distance" label="Distance" type="number" />,
  <Button key="create" onClick={() => handleSubmit(getListTrackers)}>
    Create tracker
  </Button>
]

const handleSubmit = async getListTrackers => {
  const tracker = {
    activity: document.getElementById("activity").value,
    distance: parseInt(document.getElementById("distance").value, 10),
    uuid: "7488a646-e31f-11e4-aace-600308960668",
    completed_at: new Date().toISOString()
  }
  await axios.post("http://localhost:4000/api/v1/trackers", { tracker })
  getListTrackers()
}

export default FormCreateTracker
