"use client"

import { MLProvider } from "@/context/MLContext"
import { useML } from "@/context/MLContext"
import { Sidebar } from "@/components/Sidebar"
import { ProgressSteps } from "@/components/ProgressSteps"
import { LoadingAndError } from "@/components/LoadingAndError"
import { UploadStep } from "@/components/steps/UploadStep"
import { PreprocessStep } from "@/components/steps/PreProcessStep"
import { TrainStep } from "@/components/steps/TrainStep"
import { VisualizeStep } from "@/components/steps/VisualizeStep"
import { DatasetSummary } from "@/components/DatasetSummary"

// This component renders the active step based on the current state
function ActiveStep() {
  const { activeStep } = useML()

  switch (activeStep) {
    case "upload":
      return <UploadStep />
    case "preprocess":
      return <PreprocessStep />
    case "train":
      return <TrainStep />
    case "visualize":
      return <VisualizeStep />
    default:
      return <UploadStep />
  }
}

// Main content component
function MainContent() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <ProgressSteps />
        <LoadingAndError />
        <ActiveStep />
        <DatasetSummary />
      </div>
    </div>
  )
}

// Mobile header component
function MobileHeader() {
  return (
    <div className="lg:hidden bg-primary text-primary-foreground p-4">
      <h1 className="text-xl font-bold">ML Platform</h1>
    </div>
  )
}

// Main DragDrop component
export default function DragDrop() {
  return (
    <MLProvider>
      <div className="flex min-h-screen flex-col lg:flex-row">
        <MobileHeader />
        <Sidebar />
        <MainContent />
      </div>
    </MLProvider>
  )
}

