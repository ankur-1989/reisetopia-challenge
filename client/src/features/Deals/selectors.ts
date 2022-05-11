import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const getAllHotels = (state: RootState) => state.hotelsList.hotels;

export const getFirstFiveHotels = createSelector(getAllHotels, (hotels) =>
  hotels.slice(0, 5)
);

export const getFetchStatus = (state: RootState) => state.hotelsList.status;

const selectHotelId = (state: RootState, hotelId: number) => hotelId;

export const getDealsByHotelId = createSelector(
  [getAllHotels, selectHotelId],
  (hotels, hotelId) =>
    hotels.filter((hotel) => hotel.id === hotelId).map((hotel) => hotel.deals)
);

export const getBenefitsByHotelId = createSelector(
  [getAllHotels, selectHotelId],
  (hotels, hotelId) =>
    hotels
      .filter((hotel) => hotel.id === hotelId)
      .map((hotel) => hotel.benefits)
);

export const getImagesByHotelId = createSelector(
  [getAllHotels, selectHotelId],
  (hotels, hotelId) =>
    hotels.filter((hotel) => hotel.id === hotelId).map((hotel) => hotel.images)
);
