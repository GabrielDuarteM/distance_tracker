defmodule DistanceTrackerWeb.Router do
  use DistanceTrackerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", DistanceTrackerWeb do
    pipe_through :api
    scope "/v1" do
      resources "/trackers", TrackerController, except: [:new, :edit]
    end
  end
end
