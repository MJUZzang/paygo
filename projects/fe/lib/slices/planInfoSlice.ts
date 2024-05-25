import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/../lib/store";
import { dummyPlanInfo, PlanInfo, PlanInfoState } from "@/_types/Plan";

// Define the initial state using that type
const initialState: PlanInfoState =
    process.env.NODE_ENV === "development"
        ? {
              ...dummyPlanInfo,
              selectedWorkout: 1,
          }
        : {
              ...dummyPlanInfo,
              selectedWorkout: 1,
          };
// : {
//       ...emptyPlanInfo,
//       selectedWorkout: 0,
//   };

export const planInfoSlice = createSlice({
    name: "planInfo",

    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setSelectedWorkout: (state, action: PayloadAction<number>) => {
            state.selectedWorkout = action.payload;
        },

        markWorkoutAsCompleted: (state, action: PayloadAction<number>) => {
            state.workouts![action.payload].cleared = true;
        },

        setDoneSecond: (
            state,
            action: PayloadAction<{
                workoutIndex: number;
                completionTime: number;
            }>
        ) => {
            state.workouts = state.workouts!.map((workout, index) =>
                index === action.payload.workoutIndex
                    ? {
                          ...workout,
                          doneSecond: action.payload.completionTime,
                      }
                    : workout
            );
        },

        initPlanInfoState: (state, action: PayloadAction<PlanInfoState>) => {
            if (action.payload.id) {
                state.id = action.payload.id;
            }
            if (action.payload.workouts) {
                state.workouts = action.payload.workouts;
            }
            if (action.payload.tasks) {
                state.tasks = action.payload.tasks;
            }
            if (action.payload.name) {
                state.name = action.payload.name;
            }
            if (action.payload.type) {
                state.type = action.payload.type;
            }
            if (action.payload.cleared) {
                state.cleared = action.payload.cleared;
            }
            if (action.payload.createdAt) {
                state.createdAt = action.payload.createdAt;
            }
            if (action.payload.time) {
                state.time = action.payload.time;
            }
            if (action.payload.total) {
                state.total = action.payload.total;
            }
            if (action.payload.selectedWorkout) {
                state.selectedWorkout = action.payload.selectedWorkout;
            }
        },
    },
});

export const { setSelectedWorkout, markWorkoutAsCompleted, setDoneSecond, initPlanInfoState } =
    planInfoSlice.actions;

export const selectPlanInfo = (state: RootState) => state.planInfo;
export const selectSelectedWorkout = (state: RootState) =>
    state.planInfo.selectedWorkout;

export default planInfoSlice.reducer;
