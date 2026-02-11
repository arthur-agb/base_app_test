"""
Standalone script to run the startup and verification process.
This can be used in CI/CD pipelines or as a standalone verification tool.
"""
import sys
import argparse
from app import Application


def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description='Run application startup and verification'
    )
    parser.add_argument(
        '--name',
        type=str,
        default='BaseAppTest',
        help='Application name (default: BaseAppTest)'
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Enable verbose output'
    )
    parser.add_argument(
        '--skip-start',
        action='store_true',
        help='Skip startup and only run verification'
    )
    return parser.parse_args()


def main():
    """Main function for the verification script."""
    args = parse_arguments()
    
    if args.verbose:
        print(f"Running verification for: {args.name}")
        print(f"Arguments: {vars(args)}")
    
    app = Application(args.name)
    
    if not args.skip_start:
        if args.verbose:
            print("Starting application...")
        
        if not app.start():
            print("❌ Application startup failed")
            sys.exit(1)
        
        if args.verbose:
            print("✅ Application started successfully")
    else:
        if args.verbose:
            print("⚠️  Skipping application startup")
        # Manually set started flag for verification
        app.started = True
    
    if args.verbose:
        print("Running verification checks...")
    
    verification_result = app.verify()
    
    if verification_result[0]:
        print(f"✅ {verification_result[1]}")
        sys.exit(0)
    else:
        print(f"❌ {verification_result[1]}")
        sys.exit(1)


if __name__ == "__main__":
    main()
