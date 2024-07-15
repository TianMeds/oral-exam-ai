'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../components/ui/dialog"
  import { Button } from "../../components/ui/button"
  import { Input } from "../../components/ui/input"
  import { Textarea } from "../../components/ui/textarea"



  

const AddNewExam = () => {

  const [openDialog, setOpenDialog] = useState(false)
  const [examTitle, setExamTitle] = useState();
  const [examDesc, setExamDesc] = useState();
  const [examLevel, setExamLevel] = useState();
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md hover:shadow-white cursor-pointer transition-all' onClick={() => setOpenDialog(true)}>
            <h2 className='text-lg text-center text-white'>+ Add New </h2>
        </div>

        <Dialog open={openDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">Tell us more about your oral proficiency</DialogTitle>
              <DialogDescription>
                <form>
                <div>
                  <h2>Add details about your exam title, exam description, and your proficiency level </h2>

                  <div className='mt-7 my-3'>
                    <label>Oral Exam Topics</label>
                    <Input 
                    placeholder="Ex. Politics, Technology, and Environment" 
                    required
                    onChange={(e) => setExamTitle(e.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label>Oral Exam Description</label>
                    <Textarea 
                    placeholder="Ex. Its about Pollution in the Environment" 
                    required
                    onChange={(e) => setExamDesc(e.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label>Proficiency Level</label>
                    <select 
                      className="block w-full h-10 mt-1 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                      required
                      onChange={(e) => setExamLevel(e.target.value)}
                    >
                      <option value="A1">A1 - Breakthrough or Beginner</option>
                      <option value="A2">A2 - Waystage or Beginner Plus</option>
                      <option value="B1">B1 - Threshold or Intermediate</option>
                      <option value="B2">B2 - Vantage or Upper Intermediate</option>
                      <option value="C1">C1 - Effective Operational Proficiency or Advanced</option>
                      <option value="C2">C2 - Mastery or Proficiency</option>
                    </select>
                  </div>

                  
                </div>
                <div className='flex gap-5 justify-end'>
                  <Button variant="ghost"  type="button" onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button type="submit">Start Exam</Button>
                </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>

    
  )
}

export default AddNewExam