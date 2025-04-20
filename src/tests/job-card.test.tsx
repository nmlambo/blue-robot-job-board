import { render, screen } from "@testing-library/react"
import JobCard from "@/components/job-card"
import type { Job } from "@/types"

// Mock Next.js Link component
jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe("JobCard", () => {
  const mockJob: Job = {
    id: "1",
    title: "Test Job",
    company: "Test Company",
    location: "Test Location",
    type: "Full-time",
    salary: "$100k - $120k",
    description: "This is a test job description",
    requirements: ["Req 1", "Req 2"],
    responsibilities: ["Resp 1", "Resp 2"],
    postedAt: "2 days ago",
    deadline: "May 15, 2023",
  }

  it("renders job information correctly", () => {
    render(<JobCard job={mockJob} />)

    // Check if the job title is rendered
    expect(screen.getByText("Test Job")).toBeInTheDocument()

    // Check if company name is rendered
    expect(screen.getByText("Test Company")).toBeInTheDocument()

    // Check if job type badge is rendered
    expect(screen.getByText("Full-time")).toBeInTheDocument()

    // Check if job description is rendered
    expect(screen.getByText("This is a test job description")).toBeInTheDocument()

    // Check if location is rendered
    expect(screen.getByText("Test Location")).toBeInTheDocument()

    // Check if salary is rendered
    expect(screen.getByText("$100k - $120k")).toBeInTheDocument()

    // Check if posted time is rendered
    expect(screen.getByText("2 days ago")).toBeInTheDocument()

    // Check if View Details button is rendered
    expect(screen.getByText("View Details")).toBeInTheDocument()

    // Check if the link points to the correct job detail page
    expect(screen.getByText("View Details").closest("a")).toHaveAttribute("href", "/jobs/1")
  })
})