'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Task } from "@/app/dashboard/developer-projects/miscelleneous/types";

const Checkbox = ({ text, id, isCheckedInitially, tasks }: { text: string; id: string; isCheckedInitially: boolean, tasks: Task[] }) => {
    const [isChecked, setIsChecked] = useState<boolean>(isCheckedInitially);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsChecked(isCheckedInitially);
    }, [isCheckedInitially]);

    const handleChange = async () => {
        setLoading(true);


        try {
            // Find the task by name and update its status
            const updatedTask = tasks.find(task => task.name === text);
            if (updatedTask) {
                updatedTask.status = !isChecked;
            } else {
                console.error(`Task with name "${text}" not found.`);
            }

            await axios.patch(`/api/developer-projects/${id}/tasks/`, { tasks });

            // Toggle isChecked state
            setIsChecked(!isChecked);
            toast.success('Successfully updated status');
        } catch (error) {
            console.error('Error updating task status:', error);
            toast.error('Failed to update status');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <label
                htmlFor={`checkbox_${text}`} // Unique ID for each checkbox
                className="flex cursor-pointer select-none items-center"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id={`checkbox_${text}`} // Unique ID for each checkbox
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                    <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked ? 'border-primary bg-gray dark:bg-transparent' : ''
                        }`}
                    >
                        <span
                            className={`h-2.5 w-2.5 rounded-sm ${isChecked ? 'bg-primary' : ''}`}
                        ></span>
                    </div>
                </div>
                {text}
            </label>
        </div>
    );
};

export default Checkbox;
