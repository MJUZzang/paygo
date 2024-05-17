package mju.paygo.plan.ui.dto;

import mju.paygo.plan.domain.Task;

public record TaskResponse(
        String name,
        Boolean cleared,
        Integer weight,
        Integer sets,
        Integer repeatation,
        Integer kcal,
        Integer time,
        Integer doneSecond
) {

    public static TaskResponse from(final Task task) {
        return new TaskResponse(
                task.getName(),
                task.getCleared(),
                task.getWeight(),
                task.getSets(),
                task.getRepeatation(),
                task.getExpect(),
                task.getTime(),
                task.getDoneSecond()
        );
    }
}
