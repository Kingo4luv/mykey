import CheckCircle from "../CheckCircle"

const VerificationAttempt = () => {
    return(
        <div className="w-full max-w-2xl px-0 md:px-12 py-0 md:py-12">
            <h3 className="text-black font-medium text-lg">Verification Attempts</h3>
            <div className="px-4">
                <div className="mt-10 space-y-16 border-l px-12">
                    <dl className="text-black relative space-y-1 bg-white px-4 rounded py-3 max-w-xs">
                        <span className="absolute left-[-60px] top-0">
                            <CheckCircle icon="invalid" />
                        </span>
                        <dt className="font-bold text-sm">Identity Rejected </dt>
                        <dd className="truncate text-sm">May 07, 16:31:19</dd>
                    </dl>
                    <dl className="text-black relative space-y-1 bg-white px-4 rounded py-3 max-w-xs">
                        <span className="absolute left-[-60px] top-5">
                            <CheckCircle icon="pending" />
                        </span>
                        <dt className="font-bold text-sm">Resubmission</dt>
                        <dd className="truncate text-sm">May 07, 16:31:19</dd>
                    </dl>
                    <dl className="text-black relative space-y-1 bg-white px-4 rounded py-3 max-w-xs">
                        <span className="absolute left-[-60px] top-5 h-12">
                            <CheckCircle  icon="valid"/>
                        </span>
                        <dt className="font-bold text-sm">Identity Accepted</dt>
                        <dd className="truncate text-sm">May 07, 16:31:19</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default VerificationAttempt